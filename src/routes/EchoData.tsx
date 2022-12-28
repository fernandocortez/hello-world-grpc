import { faker } from "@faker-js/faker";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import type { FinishedServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import * as echodata from "../protobuf/echo_data";
import { EchoDataClient } from "../protobuf/echo_data.client";
import { UserType as User } from "../../server/trpc/routers/echoData";
import { trpc } from "../utils/trpc";

function createRandomUsers(count: number): User[] {
  return Array.from({ length: count }, () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);
    return {
      id: faker.datatype.uuid(),
      firstName,
      lastName,
      email,
      age: faker.datatype.number({ min: 0, max: 100 }),
    };
  });
}

export const EchoData = () => {
  const [count, setCount] = useState<number>(1);

  const [echoDataClient, setEchoDataClient] = useState<EchoDataClient | null>(
    null
  );
  useEffect(() => {
    const transport = new GrpcWebFetchTransport({
      baseUrl: "http://localhost:8080",
    });
    setEchoDataClient(new EchoDataClient(transport));
  }, []);

  const [users, setUsers] = useState<ReadonlyArray<User>>(
    createRandomUsers(count)
  );

  const echoDataUnaryQuery = useMutation<echodata.EchoDataReply>({
    mutationFn(payload: User[]) {
      if (!echoDataClient) {
        throw new Error("GreeterClient has not been initialized");
      }
      return echoDataClient.unary({ users: payload });
    },
  });

  const echoDataServerStreamQuery = useMutation<echodata.EchoDataReply>(
    async (payload: User[]) => {
      if (!echoDataClient) {
        throw new Error("GreeterClient has not been initialized");
      }
      const call = echoDataClient.serverStream({ users: payload });
      for await (let response of call.responses) {
        console.log("got response message: ", response);
      }
    }
  );

  const trpcQuery = trpc.echoData.useMutation();

  return (
    <article>
      <section>
        <label>
          Count:&nbsp;
          <input
            autoFocus
            type="number"
            min={1}
            value={count}
            onChange={(e) => {
              setCount(parseInt(e.target.value, 10));
            }}
          />
        </label>
        &nbsp;
        <button
          disabled={echoDataServerStreamQuery.isLoading || trpcQuery.isLoading}
          onClick={() => {
            setUsers(createRandomUsers(count));
          }}
        >
          Generate Data
        </button>
      </section>

      <section>
        <button
          disabled={echoDataServerStreamQuery.isLoading || trpcQuery.isLoading}
          onClick={() => {
            echoDataUnaryQuery.mutate(users);
            echoDataServerStreamQuery.mutate(users);
            trpcQuery.mutate({ users });
          }}
        >
          Send
        </button>
      </section>
    </article>
  );
};

import { faker } from "@faker-js/faker";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import * as echodata from "../protobuf/echo_data_pb";
import { EchoDataClient } from "../protobuf/Echo_dataServiceClientPb";
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
    setEchoDataClient(new EchoDataClient("http://localhost:8080"));
  }, []);

  const [users, setUsers] = useState<ReadonlyArray<User>>(
    createRandomUsers(count)
  );
  const echoDataRequest: echodata.EchoDataRequest = useMemo(() => {
    const protoUsers = users.map((user) => {
      const protoUser = new echodata.User();
      protoUser.setId(user._id);
      protoUser.setFirstname(user.firstName);
      protoUser.setLastname(user.lastName);
      protoUser.setEmail(user.email);
      protoUser.setAge(user.age);
      return protoUser;
    });
    const request = new echodata.EchoDataRequest();
    request.setUsersList(protoUsers);
    return request;
  }, [users]);

  const echoDataUnaryQuery = useMutation<echodata.EchoDataReply.AsObject>({
    mutationFn: (payload: echodata.EchoDataRequest) => {
      return echoDataClient
        ?.echoDataUnary(payload, null)
        .then((reply) => reply.toObject());
    },
  });

  const echoDataServerStreamQuery = useMutation<echodata.User.AsObject[]>({
    mutationFn: (payload: echodata.EchoDataRequest) => {
      return new Promise((resolve, reject) => {
        const temp: User[] = [];
        const call = echoDataClient?.echoDataServerStream(payload);
        call?.on("data", (user) => {
          temp.push(user.toObject());
        });
        call?.on("error", (err) => {
          reject(err.message);
        });
        call?.on("end", () => {
          resolve(temp);
        });
      });
    },
  });

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
            echoDataUnaryQuery.mutate(echoDataRequest);
            echoDataServerStreamQuery.mutate(echoDataRequest);
            trpcQuery.mutate({ users });
          }}
        >
          Send
        </button>
      </section>
    </article>
  );
};

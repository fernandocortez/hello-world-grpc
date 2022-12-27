import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import * as helloworld from "../protobuf/hello_world_pb";
import { GreeterClient } from "../protobuf/Hello_worldServiceClientPb";
import { trpc } from "../utils/trpc";

export const HelloWorld = () => {
  const [name, setName] = useState<string>("World");

  const greeterClientRef = useRef<GreeterClient>(null);
  useEffect(() => {
    greeterClientRef.current = new GreeterClient("http://localhost:8080");
  }, []);

  const grpcQuery = useMutation<helloworld.HelloReply.AsObject>({
    mutationFn(value: string) {
      const helloRequest = new helloworld.HelloRequest();
      helloRequest.setName(value);
      return greeterClientRef.current
        ?.sayHello(helloRequest, null)
        .then((helloReply: helloworld.HelloReply) => {
          return helloReply.toObject();
        });
    },
  });

  const trpcQuery = trpc.greeting.useMutation();

  return (
    <article>
      <section>
        <form>
          <label>
            Name:&nbsp;
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          &nbsp;
          <button
            type="submit"
            disabled={grpcQuery.isLoading || trpcQuery.isLoading}
            onClick={(e) => {
              e.preventDefault();
              grpcQuery.mutate(name);
              trpcQuery.mutate({ name });
            }}
          >
            Send
          </button>
        </form>
      </section>

      <section>
        {grpcQuery.isError ? (
          <p style={{ color: "red" }}>gRPC: Something went wrong!</p>
        ) : grpcQuery.data ? (
          <p>gRPC: {grpcQuery.data.message}</p>
        ) : null}

        {trpcQuery.isError ? (
          <p style={{ color: "red" }}>tRPC: Something went wrong!</p>
        ) : trpcQuery.data ? (
          <p>tRPC: {trpcQuery.data.message}</p>
        ) : null}
      </section>
    </article>
  );
};

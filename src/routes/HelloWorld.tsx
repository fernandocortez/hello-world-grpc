import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import type { FinishedUnaryCall } from "@protobuf-ts/runtime-rpc";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { HelloReply, HelloRequest } from "../protobuf/hello_world";
import { GreeterClient } from "../protobuf/hello_world.client";
import { trpc } from "../utils/trpc";

export const HelloWorld = () => {
  const [name, setName] = useState<string>("World");

  const greeterClientRef = useRef<GreeterClient>(null);
  useEffect(() => {
    const transport = new GrpcWebFetchTransport({
      baseUrl: "http://localhost:8080",
    });
    greeterClientRef.current = new GreeterClient(transport);
  }, []);

  const grpcQuery = useMutation<HelloReply>({
    mutationFn(value: string) {
      if (!greeterClientRef.current) {
        throw new Error("GreeterClient has not been initialized");
      }

      return greeterClientRef.current
        .sayHello({ name: value })
        .then((call: FinishedUnaryCall<HelloRequest, HelloReply>) => {
          return call.response;
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

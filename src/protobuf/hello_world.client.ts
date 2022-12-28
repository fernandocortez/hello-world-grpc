// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "hello_world.proto" (package "helloworld", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Greeter } from "./hello_world";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HelloReply } from "./hello_world";
import type { HelloRequest } from "./hello_world";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The greeting service definition.
 *
 * @generated from protobuf service helloworld.Greeter
 */
export interface IGreeterClient {
    /**
     * Sends a greeting
     *
     * @generated from protobuf rpc: SayHello(helloworld.HelloRequest) returns (helloworld.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply>;
}
/**
 * The greeting service definition.
 *
 * @generated from protobuf service helloworld.Greeter
 */
export class GreeterClient implements IGreeterClient, ServiceInfo {
    typeName = Greeter.typeName;
    methods = Greeter.methods;
    options = Greeter.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Sends a greeting
     *
     * @generated from protobuf rpc: SayHello(helloworld.HelloRequest) returns (helloworld.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HelloRequest, HelloReply>("unary", this._transport, method, opt, input);
    }
}

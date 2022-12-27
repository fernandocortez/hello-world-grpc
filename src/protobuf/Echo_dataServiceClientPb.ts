/**
 * @fileoverview gRPC-Web generated client stub for echodata
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: echo_data.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as echo_data_pb from './echo_data_pb';


export class EchoDataClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorEchoDataUnary = new grpcWeb.MethodDescriptor(
    '/echodata.EchoData/EchoDataUnary',
    grpcWeb.MethodType.UNARY,
    echo_data_pb.EchoDataRequest,
    echo_data_pb.EchoDataReply,
    (request: echo_data_pb.EchoDataRequest) => {
      return request.serializeBinary();
    },
    echo_data_pb.EchoDataReply.deserializeBinary
  );

  echoDataUnary(
    request: echo_data_pb.EchoDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<echo_data_pb.EchoDataReply>;

  echoDataUnary(
    request: echo_data_pb.EchoDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: echo_data_pb.EchoDataReply) => void): grpcWeb.ClientReadableStream<echo_data_pb.EchoDataReply>;

  echoDataUnary(
    request: echo_data_pb.EchoDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: echo_data_pb.EchoDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/echodata.EchoData/EchoDataUnary',
        request,
        metadata || {},
        this.methodDescriptorEchoDataUnary,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/echodata.EchoData/EchoDataUnary',
    request,
    metadata || {},
    this.methodDescriptorEchoDataUnary);
  }

  methodDescriptorEchoDataServerStream = new grpcWeb.MethodDescriptor(
    '/echodata.EchoData/EchoDataServerStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    echo_data_pb.EchoDataRequest,
    echo_data_pb.User,
    (request: echo_data_pb.EchoDataRequest) => {
      return request.serializeBinary();
    },
    echo_data_pb.User.deserializeBinary
  );

  echoDataServerStream(
    request: echo_data_pb.EchoDataRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<echo_data_pb.User> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/echodata.EchoData/EchoDataServerStream',
      request,
      metadata || {},
      this.methodDescriptorEchoDataServerStream);
  }

}


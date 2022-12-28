const path = require("path");
const grpc = require("@grpc/grpc-js");
const { loadSync } = require("@grpc/proto-loader");
const chunk = require("lodash.chunk");

const server = new grpc.Server();

/**
 * Hello World
 */
const HELLO_WORLD_PROTO_PATH = path.join(
  __dirname,
  "../protofiles/hello_world.proto"
);

const helloWorldPackageDefinition = loadSync(HELLO_WORLD_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(
  helloWorldPackageDefinition
).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, { message: `Hello, ${call.request.name || "World"}!` });
}

server.addService(hello_proto.Greeter.service, { sayHello });

/**
 * Generate Data
 */
const ECHO_DATA_PROTO_PATH = path.join(
  __dirname,
  "../protofiles/echo_data.proto"
);

const echoDataHelloWorldPackage = loadSync(ECHO_DATA_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const echo_data_proto = grpc.loadPackageDefinition(
  echoDataHelloWorldPackage
).echodata;

function echoDataUnary(call, callback) {
  callback(null, { users: call.request.users });
}

function echoDataServerStream(call) {
  const chunks = chunk(call.request.users, 100);
  chunks.forEach((usersChunk) => {
    call.write({ users: usersChunk });
  });
  call.end();
}

server.addService(echo_data_proto.EchoData.service, {
  unary: echoDataUnary,
  serverStream: echoDataServerStream,
});

/**
 * Start server
 */
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

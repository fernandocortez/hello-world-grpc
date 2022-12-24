const path = require("path");
const grpc = require("@grpc/grpc-js");
const { loadSync } = require("@grpc/proto-loader");

const PROTO_PATH = path.join(__dirname, "../protofiles/hello_world.proto");

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, { message: `Hello, ${call.request.name || "World"}!` });
}

const server = new grpc.Server();
server.addService(hello_proto.Greeter.service, { sayHello });
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

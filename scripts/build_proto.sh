#!/bin/bash

npx pbjs -t static-module -w es6 -o src/protobuf/compiled_pb.js protofiles/*.proto
npx pbts -o src/protobuf/compiled_pb.d.ts src/protobuf/compiled_pb.js

# npx pbjs -t static-module -w commonjs -o server/compiled_pb.cjs protofiles/*.proto


protoc -I=./protofiles hello_world.proto --js_out=import_style=commonjs:./src/protobuf --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/protobuf

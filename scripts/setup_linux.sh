#!/bin/bash

# Install protoc
wget https://github.com/protocolbuffers/protobuf/releases/download/v21.12/protoc-21.12-linux-x86_64.zip
unzip protoc-21.12-linux-x86_64.zip -d protoc
mv protoc/bin/protoc $HOME/.local/bin
rm -rf protoc & rm -f protoc-21.12-linux-x86_64.zip

# Install gRPC-Web plugin for protoc
wget https://github.com/grpc/grpc-web/releases/download/1.4.2/protoc-gen-grpc-web-1.4.2-linux-x86_64
mv protoc-gen-grpc-web-1.4.2-linux-x86_64 $HOME/.local/bin/protoc-gen-grpc-web
chmod +x $HOME/.local/bin/protoc-gen-grpc-web

# Install protoc plugin for JavaScript
wget https://github.com/protocolbuffers/protobuf-javascript/releases/download/v3.21.2/protobuf-javascript-3.21.2-linux-x86_64.zip
unzip protobuf-javascript-3.21.2-linux-x86_64.zip -d protobuf
mv protobuf/bin/protoc-gen-js $HOME/.local/bin
rm -rf protobuf & rm -f protobuf-javascript-3.21.2-linux-x86_64.zip

export PATH="$PATH:$HOME/.local/bin"

import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getAge(): number;
  setAge(value: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    age: number,
  }
}

export class EchoDataRequest extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): EchoDataRequest;
  clearUsersList(): EchoDataRequest;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoDataRequest): EchoDataRequest.AsObject;
  static serializeBinaryToWriter(message: EchoDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoDataRequest;
  static deserializeBinaryFromReader(message: EchoDataRequest, reader: jspb.BinaryReader): EchoDataRequest;
}

export namespace EchoDataRequest {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class EchoDataReply extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): EchoDataReply;
  clearUsersList(): EchoDataReply;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoDataReply.AsObject;
  static toObject(includeInstance: boolean, msg: EchoDataReply): EchoDataReply.AsObject;
  static serializeBinaryToWriter(message: EchoDataReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoDataReply;
  static deserializeBinaryFromReader(message: EchoDataReply, reader: jspb.BinaryReader): EchoDataReply;
}

export namespace EchoDataReply {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}


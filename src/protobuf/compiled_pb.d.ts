import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace echodata. */
export namespace echodata {

    /** Represents an EchoData */
    class EchoData extends $protobuf.rpc.Service {

        /**
         * Constructs a new EchoData service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EchoData service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EchoData;

        /**
         * Calls EchoDataUnary.
         * @param request EchoDataRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EchoDataReply
         */
        public echoDataUnary(request: echodata.IEchoDataRequest, callback: echodata.EchoData.EchoDataUnaryCallback): void;

        /**
         * Calls EchoDataUnary.
         * @param request EchoDataRequest message or plain object
         * @returns Promise
         */
        public echoDataUnary(request: echodata.IEchoDataRequest): Promise<echodata.EchoDataReply>;

        /**
         * Calls EchoDataServerStream.
         * @param request EchoDataRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public echoDataServerStream(request: echodata.IEchoDataRequest, callback: echodata.EchoData.EchoDataServerStreamCallback): void;

        /**
         * Calls EchoDataServerStream.
         * @param request EchoDataRequest message or plain object
         * @returns Promise
         */
        public echoDataServerStream(request: echodata.IEchoDataRequest): Promise<echodata.User>;
    }

    namespace EchoData {

        /**
         * Callback as used by {@link echodata.EchoData#echoDataUnary}.
         * @param error Error, if any
         * @param [response] EchoDataReply
         */
        type EchoDataUnaryCallback = (error: (Error|null), response?: echodata.EchoDataReply) => void;

        /**
         * Callback as used by {@link echodata.EchoData#echoDataServerStream}.
         * @param error Error, if any
         * @param [response] User
         */
        type EchoDataServerStreamCallback = (error: (Error|null), response?: echodata.User) => void;
    }

    /** Properties of a User. */
    interface IUser {

        /** User _id */
        _id?: (string|null);

        /** User firstName */
        firstName?: (string|null);

        /** User lastName */
        lastName?: (string|null);

        /** User email */
        email?: (string|null);

        /** User age */
        age?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: echodata.IUser);

        /** User _id. */
        public _id: string;

        /** User firstName. */
        public firstName: string;

        /** User lastName. */
        public lastName: string;

        /** User email. */
        public email: string;

        /** User age. */
        public age: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: echodata.IUser): echodata.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link echodata.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: echodata.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link echodata.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: echodata.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): echodata.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): echodata.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): echodata.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: echodata.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EchoDataRequest. */
    interface IEchoDataRequest {

        /** EchoDataRequest users */
        users?: (echodata.IUser[]|null);
    }

    /** Represents an EchoDataRequest. */
    class EchoDataRequest implements IEchoDataRequest {

        /**
         * Constructs a new EchoDataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: echodata.IEchoDataRequest);

        /** EchoDataRequest users. */
        public users: echodata.IUser[];

        /**
         * Creates a new EchoDataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EchoDataRequest instance
         */
        public static create(properties?: echodata.IEchoDataRequest): echodata.EchoDataRequest;

        /**
         * Encodes the specified EchoDataRequest message. Does not implicitly {@link echodata.EchoDataRequest.verify|verify} messages.
         * @param message EchoDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: echodata.IEchoDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EchoDataRequest message, length delimited. Does not implicitly {@link echodata.EchoDataRequest.verify|verify} messages.
         * @param message EchoDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: echodata.IEchoDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EchoDataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EchoDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): echodata.EchoDataRequest;

        /**
         * Decodes an EchoDataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EchoDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): echodata.EchoDataRequest;

        /**
         * Verifies an EchoDataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EchoDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EchoDataRequest
         */
        public static fromObject(object: { [k: string]: any }): echodata.EchoDataRequest;

        /**
         * Creates a plain object from an EchoDataRequest message. Also converts values to other types if specified.
         * @param message EchoDataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: echodata.EchoDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EchoDataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EchoDataRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EchoDataReply. */
    interface IEchoDataReply {

        /** EchoDataReply users */
        users?: (echodata.IUser[]|null);
    }

    /** Represents an EchoDataReply. */
    class EchoDataReply implements IEchoDataReply {

        /**
         * Constructs a new EchoDataReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: echodata.IEchoDataReply);

        /** EchoDataReply users. */
        public users: echodata.IUser[];

        /**
         * Creates a new EchoDataReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EchoDataReply instance
         */
        public static create(properties?: echodata.IEchoDataReply): echodata.EchoDataReply;

        /**
         * Encodes the specified EchoDataReply message. Does not implicitly {@link echodata.EchoDataReply.verify|verify} messages.
         * @param message EchoDataReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: echodata.IEchoDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EchoDataReply message, length delimited. Does not implicitly {@link echodata.EchoDataReply.verify|verify} messages.
         * @param message EchoDataReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: echodata.IEchoDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EchoDataReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EchoDataReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): echodata.EchoDataReply;

        /**
         * Decodes an EchoDataReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EchoDataReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): echodata.EchoDataReply;

        /**
         * Verifies an EchoDataReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EchoDataReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EchoDataReply
         */
        public static fromObject(object: { [k: string]: any }): echodata.EchoDataReply;

        /**
         * Creates a plain object from an EchoDataReply message. Also converts values to other types if specified.
         * @param message EchoDataReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: echodata.EchoDataReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EchoDataReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EchoDataReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace helloworld. */
export namespace helloworld {

    /** Represents a Greeter */
    class Greeter extends $protobuf.rpc.Service {

        /**
         * Constructs a new Greeter service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Greeter;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHello(request: helloworld.IHelloRequest, callback: helloworld.Greeter.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: helloworld.IHelloRequest): Promise<helloworld.HelloReply>;
    }

    namespace Greeter {

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: (Error|null), response?: helloworld.HelloReply) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloRequest instance
         */
        public static create(properties?: helloworld.IHelloRequest): helloworld.HelloRequest;

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @param message HelloRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloRequest;

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloRequest;

        /**
         * Verifies a HelloRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloRequest
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloRequest;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param message HelloRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply message */
        message?: (string|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReply);

        /** HelloReply message. */
        public message: string;

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloReply instance
         */
        public static create(properties?: helloworld.IHelloReply): helloworld.HelloReply;

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @param message HelloReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): helloworld.HelloReply;

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): helloworld.HelloReply;

        /**
         * Verifies a HelloReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloReply
         */
        public static fromObject(object: { [k: string]: any }): helloworld.HelloReply;

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @param message HelloReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: helloworld.HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const echodata = $root.echodata = (() => {

    /**
     * Namespace echodata.
     * @exports echodata
     * @namespace
     */
    const echodata = {};

    echodata.EchoData = (function() {

        /**
         * Constructs a new EchoData service.
         * @memberof echodata
         * @classdesc Represents an EchoData
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EchoData(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (EchoData.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EchoData;

        /**
         * Creates new EchoData service using the specified rpc implementation.
         * @function create
         * @memberof echodata.EchoData
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EchoData} RPC service. Useful where requests and/or responses are streamed.
         */
        EchoData.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link echodata.EchoData#echoDataUnary}.
         * @memberof echodata.EchoData
         * @typedef EchoDataUnaryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {echodata.EchoDataReply} [response] EchoDataReply
         */

        /**
         * Calls EchoDataUnary.
         * @function echoDataUnary
         * @memberof echodata.EchoData
         * @instance
         * @param {echodata.IEchoDataRequest} request EchoDataRequest message or plain object
         * @param {echodata.EchoData.EchoDataUnaryCallback} callback Node-style callback called with the error, if any, and EchoDataReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EchoData.prototype.echoDataUnary = function echoDataUnary(request, callback) {
            return this.rpcCall(echoDataUnary, $root.echodata.EchoDataRequest, $root.echodata.EchoDataReply, request, callback);
        }, "name", { value: "EchoDataUnary" });

        /**
         * Calls EchoDataUnary.
         * @function echoDataUnary
         * @memberof echodata.EchoData
         * @instance
         * @param {echodata.IEchoDataRequest} request EchoDataRequest message or plain object
         * @returns {Promise<echodata.EchoDataReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link echodata.EchoData#echoDataServerStream}.
         * @memberof echodata.EchoData
         * @typedef EchoDataServerStreamCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {echodata.User} [response] User
         */

        /**
         * Calls EchoDataServerStream.
         * @function echoDataServerStream
         * @memberof echodata.EchoData
         * @instance
         * @param {echodata.IEchoDataRequest} request EchoDataRequest message or plain object
         * @param {echodata.EchoData.EchoDataServerStreamCallback} callback Node-style callback called with the error, if any, and User
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EchoData.prototype.echoDataServerStream = function echoDataServerStream(request, callback) {
            return this.rpcCall(echoDataServerStream, $root.echodata.EchoDataRequest, $root.echodata.User, request, callback);
        }, "name", { value: "EchoDataServerStream" });

        /**
         * Calls EchoDataServerStream.
         * @function echoDataServerStream
         * @memberof echodata.EchoData
         * @instance
         * @param {echodata.IEchoDataRequest} request EchoDataRequest message or plain object
         * @returns {Promise<echodata.User>} Promise
         * @variation 2
         */

        return EchoData;
    })();

    echodata.User = (function() {

        /**
         * Properties of a User.
         * @memberof echodata
         * @interface IUser
         * @property {string|null} [_id] User _id
         * @property {string|null} [firstName] User firstName
         * @property {string|null} [lastName] User lastName
         * @property {string|null} [email] User email
         * @property {number|null} [age] User age
         */

        /**
         * Constructs a new User.
         * @memberof echodata
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {echodata.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User _id.
         * @member {string} _id
         * @memberof echodata.User
         * @instance
         */
        User.prototype._id = "";

        /**
         * User firstName.
         * @member {string} firstName
         * @memberof echodata.User
         * @instance
         */
        User.prototype.firstName = "";

        /**
         * User lastName.
         * @member {string} lastName
         * @memberof echodata.User
         * @instance
         */
        User.prototype.lastName = "";

        /**
         * User email.
         * @member {string} email
         * @memberof echodata.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User age.
         * @member {number} age
         * @memberof echodata.User
         * @instance
         */
        User.prototype.age = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof echodata.User
         * @static
         * @param {echodata.IUser=} [properties] Properties to set
         * @returns {echodata.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link echodata.User.verify|verify} messages.
         * @function encode
         * @memberof echodata.User
         * @static
         * @param {echodata.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message._id != null && Object.hasOwnProperty.call(message, "_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message._id);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.age);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link echodata.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof echodata.User
         * @static
         * @param {echodata.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof echodata.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {echodata.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.echodata.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message._id = reader.string();
                        break;
                    }
                case 2: {
                        message.firstName = reader.string();
                        break;
                    }
                case 3: {
                        message.lastName = reader.string();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                case 5: {
                        message.age = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof echodata.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {echodata.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof echodata.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message._id != null && message.hasOwnProperty("_id"))
                if (!$util.isString(message._id))
                    return "_id: string expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof echodata.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {echodata.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.echodata.User)
                return object;
            let message = new $root.echodata.User();
            if (object._id != null)
                message._id = String(object._id);
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.age != null)
                message.age = object.age >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof echodata.User
         * @static
         * @param {echodata.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object._id = "";
                object.firstName = "";
                object.lastName = "";
                object.email = "";
                object.age = 0;
            }
            if (message._id != null && message.hasOwnProperty("_id"))
                object._id = message._id;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof echodata.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof echodata.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/echodata.User";
        };

        return User;
    })();

    echodata.EchoDataRequest = (function() {

        /**
         * Properties of an EchoDataRequest.
         * @memberof echodata
         * @interface IEchoDataRequest
         * @property {Array.<echodata.IUser>|null} [users] EchoDataRequest users
         */

        /**
         * Constructs a new EchoDataRequest.
         * @memberof echodata
         * @classdesc Represents an EchoDataRequest.
         * @implements IEchoDataRequest
         * @constructor
         * @param {echodata.IEchoDataRequest=} [properties] Properties to set
         */
        function EchoDataRequest(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EchoDataRequest users.
         * @member {Array.<echodata.IUser>} users
         * @memberof echodata.EchoDataRequest
         * @instance
         */
        EchoDataRequest.prototype.users = $util.emptyArray;

        /**
         * Creates a new EchoDataRequest instance using the specified properties.
         * @function create
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {echodata.IEchoDataRequest=} [properties] Properties to set
         * @returns {echodata.EchoDataRequest} EchoDataRequest instance
         */
        EchoDataRequest.create = function create(properties) {
            return new EchoDataRequest(properties);
        };

        /**
         * Encodes the specified EchoDataRequest message. Does not implicitly {@link echodata.EchoDataRequest.verify|verify} messages.
         * @function encode
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {echodata.IEchoDataRequest} message EchoDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.echodata.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EchoDataRequest message, length delimited. Does not implicitly {@link echodata.EchoDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {echodata.IEchoDataRequest} message EchoDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EchoDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {echodata.EchoDataRequest} EchoDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoDataRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.echodata.EchoDataRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.echodata.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EchoDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {echodata.EchoDataRequest} EchoDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EchoDataRequest message.
         * @function verify
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EchoDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.echodata.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EchoDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {echodata.EchoDataRequest} EchoDataRequest
         */
        EchoDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.echodata.EchoDataRequest)
                return object;
            let message = new $root.echodata.EchoDataRequest();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".echodata.EchoDataRequest.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".echodata.EchoDataRequest.users: object expected");
                    message.users[i] = $root.echodata.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EchoDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {echodata.EchoDataRequest} message EchoDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EchoDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.echodata.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this EchoDataRequest to JSON.
         * @function toJSON
         * @memberof echodata.EchoDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EchoDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EchoDataRequest
         * @function getTypeUrl
         * @memberof echodata.EchoDataRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EchoDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/echodata.EchoDataRequest";
        };

        return EchoDataRequest;
    })();

    echodata.EchoDataReply = (function() {

        /**
         * Properties of an EchoDataReply.
         * @memberof echodata
         * @interface IEchoDataReply
         * @property {Array.<echodata.IUser>|null} [users] EchoDataReply users
         */

        /**
         * Constructs a new EchoDataReply.
         * @memberof echodata
         * @classdesc Represents an EchoDataReply.
         * @implements IEchoDataReply
         * @constructor
         * @param {echodata.IEchoDataReply=} [properties] Properties to set
         */
        function EchoDataReply(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EchoDataReply users.
         * @member {Array.<echodata.IUser>} users
         * @memberof echodata.EchoDataReply
         * @instance
         */
        EchoDataReply.prototype.users = $util.emptyArray;

        /**
         * Creates a new EchoDataReply instance using the specified properties.
         * @function create
         * @memberof echodata.EchoDataReply
         * @static
         * @param {echodata.IEchoDataReply=} [properties] Properties to set
         * @returns {echodata.EchoDataReply} EchoDataReply instance
         */
        EchoDataReply.create = function create(properties) {
            return new EchoDataReply(properties);
        };

        /**
         * Encodes the specified EchoDataReply message. Does not implicitly {@link echodata.EchoDataReply.verify|verify} messages.
         * @function encode
         * @memberof echodata.EchoDataReply
         * @static
         * @param {echodata.IEchoDataReply} message EchoDataReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoDataReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.echodata.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EchoDataReply message, length delimited. Does not implicitly {@link echodata.EchoDataReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof echodata.EchoDataReply
         * @static
         * @param {echodata.IEchoDataReply} message EchoDataReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoDataReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EchoDataReply message from the specified reader or buffer.
         * @function decode
         * @memberof echodata.EchoDataReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {echodata.EchoDataReply} EchoDataReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoDataReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.echodata.EchoDataReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.echodata.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EchoDataReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof echodata.EchoDataReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {echodata.EchoDataReply} EchoDataReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoDataReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EchoDataReply message.
         * @function verify
         * @memberof echodata.EchoDataReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EchoDataReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.echodata.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EchoDataReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof echodata.EchoDataReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {echodata.EchoDataReply} EchoDataReply
         */
        EchoDataReply.fromObject = function fromObject(object) {
            if (object instanceof $root.echodata.EchoDataReply)
                return object;
            let message = new $root.echodata.EchoDataReply();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".echodata.EchoDataReply.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".echodata.EchoDataReply.users: object expected");
                    message.users[i] = $root.echodata.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EchoDataReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof echodata.EchoDataReply
         * @static
         * @param {echodata.EchoDataReply} message EchoDataReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EchoDataReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.echodata.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this EchoDataReply to JSON.
         * @function toJSON
         * @memberof echodata.EchoDataReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EchoDataReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EchoDataReply
         * @function getTypeUrl
         * @memberof echodata.EchoDataReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EchoDataReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/echodata.EchoDataReply";
        };

        return EchoDataReply;
    })();

    return echodata;
})();

export const helloworld = $root.helloworld = (() => {

    /**
     * Namespace helloworld.
     * @exports helloworld
     * @namespace
     */
    const helloworld = {};

    helloworld.Greeter = (function() {

        /**
         * Constructs a new Greeter service.
         * @memberof helloworld
         * @classdesc Represents a Greeter
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Greeter(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Greeter.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Greeter;

        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @function create
         * @memberof helloworld.Greeter
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Greeter} RPC service. Useful where requests and/or responses are streamed.
         */
        Greeter.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @param {helloworld.Greeter.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.helloworld.HelloRequest, $root.helloworld.HelloReply, request, callback);
        }, "name", { value: "SayHello" });

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<helloworld.HelloReply>} Promise
         * @variation 2
         */

        return Greeter;
    })();

    helloworld.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof helloworld
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof helloworld
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof helloworld.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         * @returns {helloworld.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof helloworld.HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloRequest)
                return object;
            let message = new $root.helloworld.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloRequest
         * @static
         * @param {helloworld.HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof helloworld.HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloRequest
         * @function getTypeUrl
         * @memberof helloworld.HelloRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloRequest";
        };

        return HelloRequest;
    })();

    helloworld.HelloReply = (function() {

        /**
         * Properties of a HelloReply.
         * @memberof helloworld
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */

        /**
         * Constructs a new HelloReply.
         * @memberof helloworld
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply message.
         * @member {string} message
         * @memberof helloworld.HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";

        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         * @returns {helloworld.HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };

        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @function encode
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof helloworld.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {helloworld.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.helloworld.HelloReply();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof helloworld.HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {helloworld.HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof helloworld.HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof helloworld.HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {helloworld.HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.helloworld.HelloReply)
                return object;
            let message = new $root.helloworld.HelloReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof helloworld.HelloReply
         * @static
         * @param {helloworld.HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof helloworld.HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloReply
         * @function getTypeUrl
         * @memberof helloworld.HelloReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloReply";
        };

        return HelloReply;
    })();

    return helloworld;
})();

export { $root as default };

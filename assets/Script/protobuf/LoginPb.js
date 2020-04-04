/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.loginpb = (function() {

    /**
     * Namespace loginpb.
     * @exports loginpb
     * @namespace
     */
    var loginpb = {};

    loginpb.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof loginpb
         * @interface ILoginReq
         * @property {number|null} [loginType] LoginReq loginType
         * @property {number|null} [userAccount] LoginReq userAccount
         * @property {number|null} [userPassword] LoginReq userPassword
         * @property {number|null} [createrId] LoginReq createrId
         * @property {number|Long|null} [createTime] LoginReq createTime
         * @property {string|null} [content] LoginReq content
         * @property {number|null} [type] LoginReq type
         */

        /**
         * Constructs a new LoginReq.
         * @memberof loginpb
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {loginpb.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq loginType.
         * @member {number} loginType
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.loginType = 0;

        /**
         * LoginReq userAccount.
         * @member {number} userAccount
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.userAccount = 0;

        /**
         * LoginReq userPassword.
         * @member {number} userPassword
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.userPassword = 0;

        /**
         * LoginReq createrId.
         * @member {number} createrId
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.createrId = 0;

        /**
         * LoginReq createTime.
         * @member {number|Long} createTime
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginReq content.
         * @member {string} content
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.content = "";

        /**
         * LoginReq type.
         * @member {number} type
         * @memberof loginpb.LoginReq
         * @instance
         */
        LoginReq.prototype.type = 0;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof loginpb.LoginReq
         * @static
         * @param {loginpb.ILoginReq=} [properties] Properties to set
         * @returns {loginpb.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link loginpb.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof loginpb.LoginReq
         * @static
         * @param {loginpb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.loginType);
            if (message.userAccount != null && message.hasOwnProperty("userAccount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userAccount);
            if (message.userPassword != null && message.hasOwnProperty("userPassword"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userPassword);
            if (message.createrId != null && message.hasOwnProperty("createrId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.createrId);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createTime);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link loginpb.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginpb.LoginReq
         * @static
         * @param {loginpb.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof loginpb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginpb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginpb.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginType = reader.uint32();
                    break;
                case 2:
                    message.userAccount = reader.uint32();
                    break;
                case 3:
                    message.userPassword = reader.uint32();
                    break;
                case 4:
                    message.createrId = reader.int32();
                    break;
                case 5:
                    message.createTime = reader.int64();
                    break;
                case 6:
                    message.content = reader.string();
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginpb.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginpb.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof loginpb.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                if (!$util.isInteger(message.loginType))
                    return "loginType: integer expected";
            if (message.userAccount != null && message.hasOwnProperty("userAccount"))
                if (!$util.isInteger(message.userAccount))
                    return "userAccount: integer expected";
            if (message.userPassword != null && message.hasOwnProperty("userPassword"))
                if (!$util.isInteger(message.userPassword))
                    return "userPassword: integer expected";
            if (message.createrId != null && message.hasOwnProperty("createrId"))
                if (!$util.isInteger(message.createrId))
                    return "createrId: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginpb.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginpb.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.loginpb.LoginReq)
                return object;
            var message = new $root.loginpb.LoginReq();
            if (object.loginType != null)
                message.loginType = object.loginType >>> 0;
            if (object.userAccount != null)
                message.userAccount = object.userAccount >>> 0;
            if (object.userPassword != null)
                message.userPassword = object.userPassword >>> 0;
            if (object.createrId != null)
                message.createrId = object.createrId | 0;
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginpb.LoginReq
         * @static
         * @param {loginpb.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.loginType = 0;
                object.userAccount = 0;
                object.userPassword = 0;
                object.createrId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                object.content = "";
                object.type = 0;
            }
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                object.loginType = message.loginType;
            if (message.userAccount != null && message.hasOwnProperty("userAccount"))
                object.userAccount = message.userAccount;
            if (message.userPassword != null && message.hasOwnProperty("userPassword"))
                object.userPassword = message.userPassword;
            if (message.createrId != null && message.hasOwnProperty("createrId"))
                object.createrId = message.createrId;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof loginpb.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    loginpb.LoginAck = (function() {

        /**
         * Properties of a LoginAck.
         * @memberof loginpb
         * @interface ILoginAck
         * @property {number|null} [status] LoginAck status
         * @property {string|null} [token] LoginAck token
         * @property {number|null} [userStatus] LoginAck userStatus
         */

        /**
         * Constructs a new LoginAck.
         * @memberof loginpb
         * @classdesc Represents a LoginAck.
         * @implements ILoginAck
         * @constructor
         * @param {loginpb.ILoginAck=} [properties] Properties to set
         */
        function LoginAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginAck status.
         * @member {number} status
         * @memberof loginpb.LoginAck
         * @instance
         */
        LoginAck.prototype.status = 0;

        /**
         * LoginAck token.
         * @member {string} token
         * @memberof loginpb.LoginAck
         * @instance
         */
        LoginAck.prototype.token = "";

        /**
         * LoginAck userStatus.
         * @member {number} userStatus
         * @memberof loginpb.LoginAck
         * @instance
         */
        LoginAck.prototype.userStatus = 0;

        /**
         * Creates a new LoginAck instance using the specified properties.
         * @function create
         * @memberof loginpb.LoginAck
         * @static
         * @param {loginpb.ILoginAck=} [properties] Properties to set
         * @returns {loginpb.LoginAck} LoginAck instance
         */
        LoginAck.create = function create(properties) {
            return new LoginAck(properties);
        };

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link loginpb.LoginAck.verify|verify} messages.
         * @function encode
         * @memberof loginpb.LoginAck
         * @static
         * @param {loginpb.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userStatus);
            return writer;
        };

        /**
         * Encodes the specified LoginAck message, length delimited. Does not implicitly {@link loginpb.LoginAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginpb.LoginAck
         * @static
         * @param {loginpb.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof loginpb.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginpb.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginpb.LoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.uint32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.userStatus = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginpb.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginpb.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginAck message.
         * @function verify
         * @memberof loginpb.LoginAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                if (!$util.isInteger(message.userStatus))
                    return "userStatus: integer expected";
            return null;
        };

        /**
         * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginpb.LoginAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginpb.LoginAck} LoginAck
         */
        LoginAck.fromObject = function fromObject(object) {
            if (object instanceof $root.loginpb.LoginAck)
                return object;
            var message = new $root.loginpb.LoginAck();
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.token != null)
                message.token = String(object.token);
            if (object.userStatus != null)
                message.userStatus = object.userStatus >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginpb.LoginAck
         * @static
         * @param {loginpb.LoginAck} message LoginAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.token = "";
                object.userStatus = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                object.userStatus = message.userStatus;
            return object;
        };

        /**
         * Converts this LoginAck to JSON.
         * @function toJSON
         * @memberof loginpb.LoginAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginAck;
    })();

    return loginpb;
})();

module.exports = $root;

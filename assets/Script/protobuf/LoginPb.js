/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginPb = (function() {

    /**
     * Namespace LoginPb.
     * @exports LoginPb
     * @namespace
     */
    var LoginPb = {};

    LoginPb.SessionLose = (function() {

        /**
         * Properties of a SessionLose.
         * @memberof LoginPb
         * @interface ISessionLose
         * @property {number|null} [status] SessionLose status
         */

        /**
         * Constructs a new SessionLose.
         * @memberof LoginPb
         * @classdesc Represents a SessionLose.
         * @implements ISessionLose
         * @constructor
         * @param {LoginPb.ISessionLose=} [properties] Properties to set
         */
        function SessionLose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionLose status.
         * @member {number} status
         * @memberof LoginPb.SessionLose
         * @instance
         */
        SessionLose.prototype.status = 0;

        /**
         * Creates a new SessionLose instance using the specified properties.
         * @function create
         * @memberof LoginPb.SessionLose
         * @static
         * @param {LoginPb.ISessionLose=} [properties] Properties to set
         * @returns {LoginPb.SessionLose} SessionLose instance
         */
        SessionLose.create = function create(properties) {
            return new SessionLose(properties);
        };

        /**
         * Encodes the specified SessionLose message. Does not implicitly {@link LoginPb.SessionLose.verify|verify} messages.
         * @function encode
         * @memberof LoginPb.SessionLose
         * @static
         * @param {LoginPb.ISessionLose} message SessionLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionLose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified SessionLose message, length delimited. Does not implicitly {@link LoginPb.SessionLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPb.SessionLose
         * @static
         * @param {LoginPb.ISessionLose} message SessionLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionLose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionLose message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPb.SessionLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPb.SessionLose} SessionLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionLose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPb.SessionLose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPb.SessionLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPb.SessionLose} SessionLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionLose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionLose message.
         * @function verify
         * @memberof LoginPb.SessionLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionLose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a SessionLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPb.SessionLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPb.SessionLose} SessionLose
         */
        SessionLose.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPb.SessionLose)
                return object;
            var message = new $root.LoginPb.SessionLose();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SessionLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPb.SessionLose
         * @static
         * @param {LoginPb.SessionLose} message SessionLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionLose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this SessionLose to JSON.
         * @function toJSON
         * @memberof LoginPb.SessionLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionLose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionLose;
    })();

    LoginPb.MsgC2SReqRegister = (function() {

        /**
         * Properties of a MsgC2SReqRegister.
         * @memberof LoginPb
         * @interface IMsgC2SReqRegister
         * @property {string|null} [account] MsgC2SReqRegister account
         * @property {string|null} [password] MsgC2SReqRegister password
         */

        /**
         * Constructs a new MsgC2SReqRegister.
         * @memberof LoginPb
         * @classdesc Represents a MsgC2SReqRegister.
         * @implements IMsgC2SReqRegister
         * @constructor
         * @param {LoginPb.IMsgC2SReqRegister=} [properties] Properties to set
         */
        function MsgC2SReqRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgC2SReqRegister account.
         * @member {string} account
         * @memberof LoginPb.MsgC2SReqRegister
         * @instance
         */
        MsgC2SReqRegister.prototype.account = "";

        /**
         * MsgC2SReqRegister password.
         * @member {string} password
         * @memberof LoginPb.MsgC2SReqRegister
         * @instance
         */
        MsgC2SReqRegister.prototype.password = "";

        /**
         * Creates a new MsgC2SReqRegister instance using the specified properties.
         * @function create
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {LoginPb.IMsgC2SReqRegister=} [properties] Properties to set
         * @returns {LoginPb.MsgC2SReqRegister} MsgC2SReqRegister instance
         */
        MsgC2SReqRegister.create = function create(properties) {
            return new MsgC2SReqRegister(properties);
        };

        /**
         * Encodes the specified MsgC2SReqRegister message. Does not implicitly {@link LoginPb.MsgC2SReqRegister.verify|verify} messages.
         * @function encode
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {LoginPb.IMsgC2SReqRegister} message MsgC2SReqRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2SReqRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified MsgC2SReqRegister message, length delimited. Does not implicitly {@link LoginPb.MsgC2SReqRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {LoginPb.IMsgC2SReqRegister} message MsgC2SReqRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2SReqRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgC2SReqRegister message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPb.MsgC2SReqRegister} MsgC2SReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2SReqRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPb.MsgC2SReqRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgC2SReqRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPb.MsgC2SReqRegister} MsgC2SReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2SReqRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgC2SReqRegister message.
         * @function verify
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgC2SReqRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a MsgC2SReqRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPb.MsgC2SReqRegister} MsgC2SReqRegister
         */
        MsgC2SReqRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPb.MsgC2SReqRegister)
                return object;
            var message = new $root.LoginPb.MsgC2SReqRegister();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a MsgC2SReqRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPb.MsgC2SReqRegister
         * @static
         * @param {LoginPb.MsgC2SReqRegister} message MsgC2SReqRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgC2SReqRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this MsgC2SReqRegister to JSON.
         * @function toJSON
         * @memberof LoginPb.MsgC2SReqRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgC2SReqRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgC2SReqRegister;
    })();

    LoginPb.MsgS2CAckRegister = (function() {

        /**
         * Properties of a MsgS2CAckRegister.
         * @memberof LoginPb
         * @interface IMsgS2CAckRegister
         * @property {number|null} [status] MsgS2CAckRegister status
         */

        /**
         * Constructs a new MsgS2CAckRegister.
         * @memberof LoginPb
         * @classdesc Represents a MsgS2CAckRegister.
         * @implements IMsgS2CAckRegister
         * @constructor
         * @param {LoginPb.IMsgS2CAckRegister=} [properties] Properties to set
         */
        function MsgS2CAckRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgS2CAckRegister status.
         * @member {number} status
         * @memberof LoginPb.MsgS2CAckRegister
         * @instance
         */
        MsgS2CAckRegister.prototype.status = 0;

        /**
         * Creates a new MsgS2CAckRegister instance using the specified properties.
         * @function create
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {LoginPb.IMsgS2CAckRegister=} [properties] Properties to set
         * @returns {LoginPb.MsgS2CAckRegister} MsgS2CAckRegister instance
         */
        MsgS2CAckRegister.create = function create(properties) {
            return new MsgS2CAckRegister(properties);
        };

        /**
         * Encodes the specified MsgS2CAckRegister message. Does not implicitly {@link LoginPb.MsgS2CAckRegister.verify|verify} messages.
         * @function encode
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {LoginPb.IMsgS2CAckRegister} message MsgS2CAckRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2CAckRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified MsgS2CAckRegister message, length delimited. Does not implicitly {@link LoginPb.MsgS2CAckRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {LoginPb.IMsgS2CAckRegister} message MsgS2CAckRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2CAckRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgS2CAckRegister message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPb.MsgS2CAckRegister} MsgS2CAckRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2CAckRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPb.MsgS2CAckRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgS2CAckRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPb.MsgS2CAckRegister} MsgS2CAckRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2CAckRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgS2CAckRegister message.
         * @function verify
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgS2CAckRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a MsgS2CAckRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPb.MsgS2CAckRegister} MsgS2CAckRegister
         */
        MsgS2CAckRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPb.MsgS2CAckRegister)
                return object;
            var message = new $root.LoginPb.MsgS2CAckRegister();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgS2CAckRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPb.MsgS2CAckRegister
         * @static
         * @param {LoginPb.MsgS2CAckRegister} message MsgS2CAckRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgS2CAckRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this MsgS2CAckRegister to JSON.
         * @function toJSON
         * @memberof LoginPb.MsgS2CAckRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgS2CAckRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgS2CAckRegister;
    })();

    LoginPb.MsgC2SReqLogin = (function() {

        /**
         * Properties of a MsgC2SReqLogin.
         * @memberof LoginPb
         * @interface IMsgC2SReqLogin
         * @property {string|null} [uid] MsgC2SReqLogin uid
         * @property {string|null} [channelId] MsgC2SReqLogin channelId
         */

        /**
         * Constructs a new MsgC2SReqLogin.
         * @memberof LoginPb
         * @classdesc Represents a MsgC2SReqLogin.
         * @implements IMsgC2SReqLogin
         * @constructor
         * @param {LoginPb.IMsgC2SReqLogin=} [properties] Properties to set
         */
        function MsgC2SReqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgC2SReqLogin uid.
         * @member {string} uid
         * @memberof LoginPb.MsgC2SReqLogin
         * @instance
         */
        MsgC2SReqLogin.prototype.uid = "";

        /**
         * MsgC2SReqLogin channelId.
         * @member {string} channelId
         * @memberof LoginPb.MsgC2SReqLogin
         * @instance
         */
        MsgC2SReqLogin.prototype.channelId = "";

        /**
         * Creates a new MsgC2SReqLogin instance using the specified properties.
         * @function create
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {LoginPb.IMsgC2SReqLogin=} [properties] Properties to set
         * @returns {LoginPb.MsgC2SReqLogin} MsgC2SReqLogin instance
         */
        MsgC2SReqLogin.create = function create(properties) {
            return new MsgC2SReqLogin(properties);
        };

        /**
         * Encodes the specified MsgC2SReqLogin message. Does not implicitly {@link LoginPb.MsgC2SReqLogin.verify|verify} messages.
         * @function encode
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {LoginPb.IMsgC2SReqLogin} message MsgC2SReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2SReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelId);
            return writer;
        };

        /**
         * Encodes the specified MsgC2SReqLogin message, length delimited. Does not implicitly {@link LoginPb.MsgC2SReqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {LoginPb.IMsgC2SReqLogin} message MsgC2SReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2SReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgC2SReqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPb.MsgC2SReqLogin} MsgC2SReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2SReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPb.MsgC2SReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgC2SReqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPb.MsgC2SReqLogin} MsgC2SReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2SReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgC2SReqLogin message.
         * @function verify
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgC2SReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            return null;
        };

        /**
         * Creates a MsgC2SReqLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPb.MsgC2SReqLogin} MsgC2SReqLogin
         */
        MsgC2SReqLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPb.MsgC2SReqLogin)
                return object;
            var message = new $root.LoginPb.MsgC2SReqLogin();
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            return message;
        };

        /**
         * Creates a plain object from a MsgC2SReqLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPb.MsgC2SReqLogin
         * @static
         * @param {LoginPb.MsgC2SReqLogin} message MsgC2SReqLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgC2SReqLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = "";
                object.channelId = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this MsgC2SReqLogin to JSON.
         * @function toJSON
         * @memberof LoginPb.MsgC2SReqLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgC2SReqLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgC2SReqLogin;
    })();

    LoginPb.MsgS2CAckLogin = (function() {

        /**
         * Properties of a MsgS2CAckLogin.
         * @memberof LoginPb
         * @interface IMsgS2CAckLogin
         * @property {string|null} [token] MsgS2CAckLogin token
         */

        /**
         * Constructs a new MsgS2CAckLogin.
         * @memberof LoginPb
         * @classdesc Represents a MsgS2CAckLogin.
         * @implements IMsgS2CAckLogin
         * @constructor
         * @param {LoginPb.IMsgS2CAckLogin=} [properties] Properties to set
         */
        function MsgS2CAckLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgS2CAckLogin token.
         * @member {string} token
         * @memberof LoginPb.MsgS2CAckLogin
         * @instance
         */
        MsgS2CAckLogin.prototype.token = "";

        /**
         * Creates a new MsgS2CAckLogin instance using the specified properties.
         * @function create
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {LoginPb.IMsgS2CAckLogin=} [properties] Properties to set
         * @returns {LoginPb.MsgS2CAckLogin} MsgS2CAckLogin instance
         */
        MsgS2CAckLogin.create = function create(properties) {
            return new MsgS2CAckLogin(properties);
        };

        /**
         * Encodes the specified MsgS2CAckLogin message. Does not implicitly {@link LoginPb.MsgS2CAckLogin.verify|verify} messages.
         * @function encode
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {LoginPb.IMsgS2CAckLogin} message MsgS2CAckLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2CAckLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified MsgS2CAckLogin message, length delimited. Does not implicitly {@link LoginPb.MsgS2CAckLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {LoginPb.IMsgS2CAckLogin} message MsgS2CAckLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2CAckLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgS2CAckLogin message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPb.MsgS2CAckLogin} MsgS2CAckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2CAckLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPb.MsgS2CAckLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgS2CAckLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPb.MsgS2CAckLogin} MsgS2CAckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2CAckLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgS2CAckLogin message.
         * @function verify
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgS2CAckLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a MsgS2CAckLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPb.MsgS2CAckLogin} MsgS2CAckLogin
         */
        MsgS2CAckLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPb.MsgS2CAckLogin)
                return object;
            var message = new $root.LoginPb.MsgS2CAckLogin();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a MsgS2CAckLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPb.MsgS2CAckLogin
         * @static
         * @param {LoginPb.MsgS2CAckLogin} message MsgS2CAckLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgS2CAckLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this MsgS2CAckLogin to JSON.
         * @function toJSON
         * @memberof LoginPb.MsgS2CAckLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgS2CAckLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgS2CAckLogin;
    })();

    return LoginPb;
})();

module.exports = $root;

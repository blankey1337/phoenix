/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Transaction');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Any');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Transaction.repeatedFields_, null);
};
goog.inherits(proto.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Transaction.displayName = 'proto.Transaction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Transaction.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    subtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deadline: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sender: msg.getSender_asB64(),
    recipient: jspb.Message.getFieldWithDefault(msg, 8, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 10, 0),
    block: jspb.Message.getFieldWithDefault(msg, 11, 0),
    blockheight: jspb.Message.getFieldWithDefault(msg, 12, 0),
    blocktimestamp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    appendicesList: jspb.Message.toObjectList(msg.getAppendicesList(),
    proto.google.protobuf.Any.toObject, includeInstance),
    signature: msg.getSignature_asB64(),
    referencedtransactionfullhash: msg.getReferencedtransactionfullhash_asB64(),
    fullhash: msg.getFullhash_asB64(),
    confirmations: jspb.Message.getFieldWithDefault(msg, 18, 0),
    ecblockid: jspb.Message.getFieldWithDefault(msg, 19, 0),
    ecblockheight: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Transaction}
 */
proto.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Transaction;
  return proto.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Transaction}
 */
proto.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSubtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeadline(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSender(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecipient(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlock(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockheight(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlocktimestamp(value);
      break;
    case 14:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.addAppendices(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferencedtransactionfullhash(value);
      break;
    case 17:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFullhash(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setConfirmations(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEcblockid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEcblockheight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSubtype();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDeadline();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getSender_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getRecipient();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getBlocktimestamp();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getAppendicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getReferencedtransactionfullhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getFullhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      17,
      f
    );
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeSint32(
      18,
      f
    );
  }
  f = message.getEcblockid();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getEcblockheight();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.Transaction.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 version = 2;
 * @return {number}
 */
proto.Transaction.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.Transaction.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setType = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 subtype = 4;
 * @return {number}
 */
proto.Transaction.prototype.getSubtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setSubtype = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 timestamp = 5;
 * @return {number}
 */
proto.Transaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 deadline = 6;
 * @return {number}
 */
proto.Transaction.prototype.getDeadline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setDeadline = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes sender = 7;
 * @return {string}
 */
proto.Transaction.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes sender = 7;
 * This is a type-conversion wrapper around `getSender()`
 * @return {string}
 */
proto.Transaction.prototype.getSender_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSender()));
};


/**
 * optional bytes sender = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSender()`
 * @return {!Uint8Array}
 */
proto.Transaction.prototype.getSender_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSender()));
};


/** @param {!(string|Uint8Array)} value */
proto.Transaction.prototype.setSender = function(value) {
  jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional uint64 recipient = 8;
 * @return {number}
 */
proto.Transaction.prototype.getRecipient = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setRecipient = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 amount = 9;
 * @return {number}
 */
proto.Transaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 fee = 10;
 * @return {number}
 */
proto.Transaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 block = 11;
 * @return {number}
 */
proto.Transaction.prototype.getBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setBlock = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 blockHeight = 12;
 * @return {number}
 */
proto.Transaction.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setBlockheight = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 blockTimestamp = 13;
 * @return {number}
 */
proto.Transaction.prototype.getBlocktimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setBlocktimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated google.protobuf.Any appendices = 14;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.Transaction.prototype.getAppendicesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Any, 14));
};


/** @param {!Array<!proto.google.protobuf.Any>} value */
proto.Transaction.prototype.setAppendicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.Transaction.prototype.addAppendices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.Transaction.prototype.clearAppendicesList = function() {
  this.setAppendicesList([]);
};


/**
 * optional bytes signature = 15;
 * @return {string}
 */
proto.Transaction.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes signature = 15;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.Transaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.Transaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.Transaction.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional bytes referencedTransactionFullHash = 16;
 * @return {string}
 */
proto.Transaction.prototype.getReferencedtransactionfullhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes referencedTransactionFullHash = 16;
 * This is a type-conversion wrapper around `getReferencedtransactionfullhash()`
 * @return {string}
 */
proto.Transaction.prototype.getReferencedtransactionfullhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferencedtransactionfullhash()));
};


/**
 * optional bytes referencedTransactionFullHash = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferencedtransactionfullhash()`
 * @return {!Uint8Array}
 */
proto.Transaction.prototype.getReferencedtransactionfullhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferencedtransactionfullhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.Transaction.prototype.setReferencedtransactionfullhash = function(value) {
  jspb.Message.setProto3BytesField(this, 16, value);
};


/**
 * optional bytes fullHash = 17;
 * @return {string}
 */
proto.Transaction.prototype.getFullhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * optional bytes fullHash = 17;
 * This is a type-conversion wrapper around `getFullhash()`
 * @return {string}
 */
proto.Transaction.prototype.getFullhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFullhash()));
};


/**
 * optional bytes fullHash = 17;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFullhash()`
 * @return {!Uint8Array}
 */
proto.Transaction.prototype.getFullhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFullhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.Transaction.prototype.setFullhash = function(value) {
  jspb.Message.setProto3BytesField(this, 17, value);
};


/**
 * optional sint32 confirmations = 18;
 * @return {number}
 */
proto.Transaction.prototype.getConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setConfirmations = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint64 ecBlockId = 19;
 * @return {number}
 */
proto.Transaction.prototype.getEcblockid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setEcblockid = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 ecBlockHeight = 20;
 * @return {number}
 */
proto.Transaction.prototype.getEcblockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.Transaction.prototype.setEcblockheight = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};



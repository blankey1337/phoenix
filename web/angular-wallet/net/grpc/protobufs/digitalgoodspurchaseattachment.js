/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.DigitalGoodsPurchaseAttachment');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.DigitalGoodsPurchaseAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DigitalGoodsPurchaseAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DigitalGoodsPurchaseAttachment.displayName = 'proto.DigitalGoodsPurchaseAttachment';
}


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
proto.DigitalGoodsPurchaseAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.DigitalGoodsPurchaseAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DigitalGoodsPurchaseAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DigitalGoodsPurchaseAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    goodsid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    price: jspb.Message.getFieldWithDefault(msg, 4, 0),
    deliverydeadlinetimestmap: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.DigitalGoodsPurchaseAttachment}
 */
proto.DigitalGoodsPurchaseAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DigitalGoodsPurchaseAttachment;
  return proto.DigitalGoodsPurchaseAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DigitalGoodsPurchaseAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DigitalGoodsPurchaseAttachment}
 */
proto.DigitalGoodsPurchaseAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGoodsid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeliverydeadlinetimestmap(value);
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
proto.DigitalGoodsPurchaseAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DigitalGoodsPurchaseAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DigitalGoodsPurchaseAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DigitalGoodsPurchaseAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getGoodsid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getDeliverydeadlinetimestmap();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.DigitalGoodsPurchaseAttachment.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DigitalGoodsPurchaseAttachment.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 goodsId = 2;
 * @return {number}
 */
proto.DigitalGoodsPurchaseAttachment.prototype.getGoodsid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DigitalGoodsPurchaseAttachment.prototype.setGoodsid = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 quantity = 3;
 * @return {number}
 */
proto.DigitalGoodsPurchaseAttachment.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DigitalGoodsPurchaseAttachment.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 price = 4;
 * @return {number}
 */
proto.DigitalGoodsPurchaseAttachment.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DigitalGoodsPurchaseAttachment.prototype.setPrice = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 deliveryDeadlineTimestmap = 5;
 * @return {number}
 */
proto.DigitalGoodsPurchaseAttachment.prototype.getDeliverydeadlinetimestmap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DigitalGoodsPurchaseAttachment.prototype.setDeliverydeadlinetimestmap = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



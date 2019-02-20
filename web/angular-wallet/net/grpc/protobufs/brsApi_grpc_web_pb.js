/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = require('./brsApi_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BrsApiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BrsApiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.BrsApiServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.BrsApiServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetBlockRequest,
 *   !proto.Block>}
 */
const methodInfo_BrsApiService_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Block,
  /** @param {!proto.GetBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Block.deserializeBinary
);


/**
 * @param {!proto.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Block)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Block>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/GetBlock',
      request,
      metadata || {},
      methodInfo_BrsApiService_GetBlock,
      callback);
};


/**
 * @param {!proto.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Block>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getBlock =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getBlock(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAccountRequest,
 *   !proto.Account>}
 */
const methodInfo_BrsApiService_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Account,
  /** @param {!proto.GetAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Account.deserializeBinary
);


/**
 * @param {!proto.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/GetAccount',
      request,
      metadata || {},
      methodInfo_BrsApiService_GetAccount,
      callback);
};


/**
 * @param {!proto.GetAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Account>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getAccount =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getAccount(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAccountsRequest,
 *   !proto.Accounts>}
 */
const methodInfo_BrsApiService_GetAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Accounts,
  /** @param {!proto.GetAccountsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Accounts.deserializeBinary
);


/**
 * @param {!proto.GetAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Accounts)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Accounts>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/GetAccounts',
      request,
      metadata || {},
      methodInfo_BrsApiService_GetAccounts,
      callback);
};


/**
 * @param {!proto.GetAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Accounts>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getAccounts =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getAccounts(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.MiningInfo>}
 */
const methodInfo_BrsApiService_GetMiningInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.MiningInfo,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.MiningInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MiningInfo>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getMiningInfo =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BrsApiService/GetMiningInfo',
      request,
      metadata,
      methodInfo_BrsApiService_GetMiningInfo);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MiningInfo>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getMiningInfo =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/BrsApiService/GetMiningInfo',
      request,
      metadata,
      methodInfo_BrsApiService_GetMiningInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetTransactionRequest,
 *   !proto.Transaction>}
 */
const methodInfo_BrsApiService_GetTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Transaction,
  /** @param {!proto.GetTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.deserializeBinary
);


/**
 * @param {!proto.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/GetTransaction',
      request,
      metadata || {},
      methodInfo_BrsApiService_GetTransaction,
      callback);
};


/**
 * @param {!proto.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getTransaction =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getTransaction(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetTransactionRequest,
 *   !proto.TransactionBytes>}
 */
const methodInfo_BrsApiService_GetTransactionBytes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TransactionBytes,
  /** @param {!proto.GetTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TransactionBytes.deserializeBinary
);


/**
 * @param {!proto.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TransactionBytes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TransactionBytes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.getTransactionBytes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/GetTransactionBytes',
      request,
      metadata || {},
      methodInfo_BrsApiService_GetTransactionBytes,
      callback);
};


/**
 * @param {!proto.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TransactionBytes>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.getTransactionBytes =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.getTransactionBytes(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SubmitNonceRequest,
 *   !proto.SubmitNonceResponse>}
 */
const methodInfo_BrsApiService_SubmitNonce = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SubmitNonceResponse,
  /** @param {!proto.SubmitNonceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubmitNonceResponse.deserializeBinary
);


/**
 * @param {!proto.SubmitNonceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SubmitNonceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubmitNonceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServiceClient.prototype.submitNonce =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BrsApiService/SubmitNonce',
      request,
      metadata || {},
      methodInfo_BrsApiService_SubmitNonce,
      callback);
};


/**
 * @param {!proto.SubmitNonceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubmitNonceResponse>}
 *     The XHR Node Readable Stream
 */
proto.BrsApiServicePromiseClient.prototype.submitNonce =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.submitNonce(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto;


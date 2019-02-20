/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

import {
  Account,
  Accounts,
  Block,
  GetAccountRequest,
  GetAccountsRequest,
  GetBlockRequest,
  GetTransactionRequest,
  MiningInfo,
  SubmitNonceRequest,
  SubmitNonceResponse,
  Transaction,
  TransactionBytes} from './brsApi_pb';

export class BrsApiServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    Block,
    (request: GetBlockRequest) => {
      return request.serializeBinary();
    },
    Block.deserializeBinary
  );

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Block) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/GetBlock',
      request,
      metadata || {},
      this.methodInfoGetBlock,
      callback);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    Account,
    (request: GetAccountRequest) => {
      return request.serializeBinary();
    },
    Account.deserializeBinary
  );

  getAccount(
    request: GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Account) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/GetAccount',
      request,
      metadata || {},
      this.methodInfoGetAccount,
      callback);
  }

  methodInfoGetAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    Accounts,
    (request: GetAccountsRequest) => {
      return request.serializeBinary();
    },
    Accounts.deserializeBinary
  );

  getAccounts(
    request: GetAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Accounts) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/GetAccounts',
      request,
      metadata || {},
      this.methodInfoGetAccounts,
      callback);
  }

  methodInfoGetMiningInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    MiningInfo,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    MiningInfo.deserializeBinary
  );

  getMiningInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/BrsApiService/GetMiningInfo',
      request,
      metadata || {},
      this.methodInfoGetMiningInfo);
  }

  methodInfoGetTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    Transaction,
    (request: GetTransactionRequest) => {
      return request.serializeBinary();
    },
    Transaction.deserializeBinary
  );

  getTransaction(
    request: GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Transaction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/GetTransaction',
      request,
      metadata || {},
      this.methodInfoGetTransaction,
      callback);
  }

  methodInfoGetTransactionBytes = new grpcWeb.AbstractClientBase.MethodInfo(
    TransactionBytes,
    (request: GetTransactionRequest) => {
      return request.serializeBinary();
    },
    TransactionBytes.deserializeBinary
  );

  getTransactionBytes(
    request: GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TransactionBytes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/GetTransactionBytes',
      request,
      metadata || {},
      this.methodInfoGetTransactionBytes,
      callback);
  }

  methodInfoSubmitNonce = new grpcWeb.AbstractClientBase.MethodInfo(
    SubmitNonceResponse,
    (request: SubmitNonceRequest) => {
      return request.serializeBinary();
    },
    SubmitNonceResponse.deserializeBinary
  );

  submitNonce(
    request: SubmitNonceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SubmitNonceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/BrsApiService/SubmitNonce',
      request,
      metadata || {},
      this.methodInfoSubmitNonce,
      callback);
  }

}


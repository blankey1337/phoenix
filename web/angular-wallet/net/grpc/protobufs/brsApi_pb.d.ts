import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

export class GetBlockRequest extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getHeight(): number;
  setHeight(value: number): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;
  getIncludetransactions(): boolean;
  setIncludetransactions(value: boolean): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockRequest): GetBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(message: GetBlockRequest, reader: jspb.BinaryReader): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    id: number;
    height: number;
    timestamp: number;
    includetransactions: boolean;
  }
}

export class GetAccountRequest extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    id: number;
  }
}

export class GetAccountsRequest extends jspb.Message {
  constructor ();
  getRewardrecipient(): number;
  setRewardrecipient(value: number): void;
  getName(): string;
  setName(value: string): void;
  getIncludeaccounts(): boolean;
  setIncludeaccounts(value: boolean): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsRequest): GetAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsRequest;
  static deserializeBinaryFromReader(message: GetAccountsRequest, reader: jspb.BinaryReader): GetAccountsRequest;
}

export namespace GetAccountsRequest {
  export type AsObject = {
    rewardrecipient: number;
    name: string;
    includeaccounts: boolean;
  }
}

export class GetTransactionRequest extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getFullhash(): {};
  setFullhash(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    id: number;
    fullhash: {};
  }
}

export class SubmitNonceRequest extends jspb.Message {
  constructor ();
  getSecretphrase(): string;
  setSecretphrase(value: string): void;
  getNonce(): number;
  setNonce(value: number): void;
  getAccount(): number;
  setAccount(value: number): void;
  getBlockheight(): number;
  setBlockheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitNonceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitNonceRequest): SubmitNonceRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitNonceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitNonceRequest;
  static deserializeBinaryFromReader(message: SubmitNonceRequest, reader: jspb.BinaryReader): SubmitNonceRequest;
}

export namespace SubmitNonceRequest {
  export type AsObject = {
    secretphrase: string;
    nonce: number;
    account: number;
    blockheight: number;
  }
}

export class SubmitNonceResponse extends jspb.Message {
  constructor ();
  getDeadline(): number;
  setDeadline(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitNonceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitNonceResponse): SubmitNonceResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitNonceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitNonceResponse;
  static deserializeBinaryFromReader(message: SubmitNonceResponse, reader: jspb.BinaryReader): SubmitNonceResponse;
}

export namespace SubmitNonceResponse {
  export type AsObject = {
    deadline: number;
  }
}

export class Block extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getHeight(): number;
  setHeight(value: number): void;
  getNumberoftransactions(): number;
  setNumberoftransactions(value: number): void;
  getTotalamount(): number;
  setTotalamount(value: number): void;
  getTotalfee(): number;
  setTotalfee(value: number): void;
  getBlockreward(): number;
  setBlockreward(value: number): void;
  getPayloadlength(): number;
  setPayloadlength(value: number): void;
  getVersion(): number;
  setVersion(value: number): void;
  getBasetarget(): number;
  setBasetarget(value: number): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;
  getGenerationsignature(): {};
  setGenerationsignature(value: {}): void;
  getBlocksignature(): {};
  setBlocksignature(value: {}): void;
  getPayloadhash(): {};
  setPayloadhash(value: {}): void;
  getTransactionsList(): Transaction[] | undefined;
  setTransactionsList(value?: Transaction[]): void;
  clearTransactionsList(): void;
  getTransactionidsList(): number[];
  setTransactionidsList(value: number[]): void;
  clearTransactionidsList(): void;
  getGeneratorpublickey(): {};
  setGeneratorpublickey(value: {}): void;
  getNonce(): number;
  setNonce(value: number): void;
  getScoop(): number;
  setScoop(value: number): void;
  getPreviousblock(): number;
  setPreviousblock(value: number): void;
  getNextblock(): number;
  setNextblock(value: number): void;
  getPreviousblockhash(): {};
  setPreviousblockhash(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    id: number;
    height: number;
    numberoftransactions: number;
    totalamount: number;
    totalfee: number;
    blockreward: number;
    payloadlength: number;
    version: number;
    basetarget: number;
    timestamp: number;
    generationsignature: {};
    blocksignature: {};
    payloadhash: {};
    transactionsList?: Transaction.AsObject[];
    transactionidsList: number[];
    generatorpublickey: {};
    nonce: number;
    scoop: number;
    previousblock: number;
    nextblock: number;
    previousblockhash: {};
  }
}

export class Transaction extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getVersion(): number;
  setVersion(value: number): void;
  getType(): number;
  setType(value: number): void;
  getSubtype(): number;
  setSubtype(value: number): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;
  getDeadline(): number;
  setDeadline(value: number): void;
  getSender(): {};
  setSender(value: {}): void;
  getRecipient(): number;
  setRecipient(value: number): void;
  getAmount(): number;
  setAmount(value: number): void;
  getFee(): number;
  setFee(value: number): void;
  getBlock(): number;
  setBlock(value: number): void;
  getBlockheight(): number;
  setBlockheight(value: number): void;
  getBlocktimestamp(): number;
  setBlocktimestamp(value: number): void;
  getAppendicesList(): google_protobuf_any_pb.Any[] | undefined;
  setAppendicesList(value?: google_protobuf_any_pb.Any[]): void;
  clearAppendicesList(): void;
  getSignature(): {};
  setSignature(value: {}): void;
  getReferencedtransactionfullhash(): {};
  setReferencedtransactionfullhash(value: {}): void;
  getFullhash(): {};
  setFullhash(value: {}): void;
  getConfirmations(): number;
  setConfirmations(value: number): void;
  getEcblockid(): number;
  setEcblockid(value: number): void;
  getEcblockheight(): number;
  setEcblockheight(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: number;
    version: number;
    type: number;
    subtype: number;
    timestamp: number;
    deadline: number;
    sender: {};
    recipient: number;
    amount: number;
    fee: number;
    block: number;
    blockheight: number;
    blocktimestamp: number;
    appendicesList?: google_protobuf_any_pb.Any.AsObject[];
    signature: {};
    referencedtransactionfullhash: {};
    fullhash: {};
    confirmations: number;
    ecblockid: number;
    ecblockheight: number;
  }
}

export class MessageAppendix extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getMessage(): {};
  setMessage(value: {}): void;
  getIstext(): boolean;
  setIstext(value: boolean): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageAppendix.AsObject;
  static toObject(includeInstance: boolean, msg: MessageAppendix): MessageAppendix.AsObject;
  static serializeBinaryToWriter(message: MessageAppendix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageAppendix;
  static deserializeBinaryFromReader(message: MessageAppendix, reader: jspb.BinaryReader): MessageAppendix;
}

export namespace MessageAppendix {
  export type AsObject = {
    version: number;
    message: {};
    istext: boolean;
  }
}

export class EncryptedMessageAppendix extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getData(): {};
  setData(value: {}): void;
  getNonce(): {};
  setNonce(value: {}): void;
  getIstext(): boolean;
  setIstext(value: boolean): void;
  getType(): EncryptedMessageAppendix.Type;
  setType(value: EncryptedMessageAppendix.Type): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedMessageAppendix.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedMessageAppendix): EncryptedMessageAppendix.AsObject;
  static serializeBinaryToWriter(message: EncryptedMessageAppendix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedMessageAppendix;
  static deserializeBinaryFromReader(message: EncryptedMessageAppendix, reader: jspb.BinaryReader): EncryptedMessageAppendix;
}

export namespace EncryptedMessageAppendix {
  export type AsObject = {
    version: number;
    data: {};
    nonce: {};
    istext: boolean;
    type: EncryptedMessageAppendix.Type;
  }

  export enum Type { 
    TO_RECIPIENT = 0,
    TO_SELF = 1,
  }
}

export class PublicKeyAnnouncementAppendix extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getRecipientpublickey(): {};
  setRecipientpublickey(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyAnnouncementAppendix.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyAnnouncementAppendix): PublicKeyAnnouncementAppendix.AsObject;
  static serializeBinaryToWriter(message: PublicKeyAnnouncementAppendix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyAnnouncementAppendix;
  static deserializeBinaryFromReader(message: PublicKeyAnnouncementAppendix, reader: jspb.BinaryReader): PublicKeyAnnouncementAppendix;
}

export namespace PublicKeyAnnouncementAppendix {
  export type AsObject = {
    version: number;
    recipientpublickey: {};
  }
}

export class MultiOutAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getRecipientsList(): MultiOutAttachment.MultiOutRecipient[] | undefined;
  setRecipientsList(value?: MultiOutAttachment.MultiOutRecipient[]): void;
  clearRecipientsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOutAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOutAttachment): MultiOutAttachment.AsObject;
  static serializeBinaryToWriter(message: MultiOutAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOutAttachment;
  static deserializeBinaryFromReader(message: MultiOutAttachment, reader: jspb.BinaryReader): MultiOutAttachment;
}

export namespace MultiOutAttachment {
  export type AsObject = {
    version: number;
    recipientsList?: MultiOutAttachment.MultiOutRecipient.AsObject[];
  }

  export class MultiOutRecipient extends jspb.Message {
    constructor ();
    getRecipient(): number;
    setRecipient(value: number): void;
    getAmount(): number;
    setAmount(value: number): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiOutRecipient.AsObject;
    static toObject(includeInstance: boolean, msg: MultiOutRecipient): MultiOutRecipient.AsObject;
    static serializeBinaryToWriter(message: MultiOutRecipient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiOutRecipient;
    static deserializeBinaryFromReader(message: MultiOutRecipient, reader: jspb.BinaryReader): MultiOutRecipient;
  }

  export namespace MultiOutRecipient {
    export type AsObject = {
      recipient: number;
      amount: number;
    }
  }

}

export class MultiOutSameAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getRecipientsList(): number[];
  setRecipientsList(value: number[]): void;
  clearRecipientsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOutSameAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOutSameAttachment): MultiOutSameAttachment.AsObject;
  static serializeBinaryToWriter(message: MultiOutSameAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOutSameAttachment;
  static deserializeBinaryFromReader(message: MultiOutSameAttachment, reader: jspb.BinaryReader): MultiOutSameAttachment;
}

export namespace MultiOutSameAttachment {
  export type AsObject = {
    version: number;
    recipientsList: number[];
  }
}

export class AliasAssignmentAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getUri(): string;
  setUri(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasAssignmentAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AliasAssignmentAttachment): AliasAssignmentAttachment.AsObject;
  static serializeBinaryToWriter(message: AliasAssignmentAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasAssignmentAttachment;
  static deserializeBinaryFromReader(message: AliasAssignmentAttachment, reader: jspb.BinaryReader): AliasAssignmentAttachment;
}

export namespace AliasAssignmentAttachment {
  export type AsObject = {
    version: number;
    name: string;
    uri: string;
  }
}

export class AliasSellAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getPrice(): number;
  setPrice(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasSellAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AliasSellAttachment): AliasSellAttachment.AsObject;
  static serializeBinaryToWriter(message: AliasSellAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasSellAttachment;
  static deserializeBinaryFromReader(message: AliasSellAttachment, reader: jspb.BinaryReader): AliasSellAttachment;
}

export namespace AliasSellAttachment {
  export type AsObject = {
    version: number;
    name: string;
    price: number;
  }
}

export class AliasBuyAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasBuyAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AliasBuyAttachment): AliasBuyAttachment.AsObject;
  static serializeBinaryToWriter(message: AliasBuyAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasBuyAttachment;
  static deserializeBinaryFromReader(message: AliasBuyAttachment, reader: jspb.BinaryReader): AliasBuyAttachment;
}

export namespace AliasBuyAttachment {
  export type AsObject = {
    version: number;
    name: string;
  }
}

export class AccountInfoAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getDescription(): string;
  setDescription(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfoAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfoAttachment): AccountInfoAttachment.AsObject;
  static serializeBinaryToWriter(message: AccountInfoAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfoAttachment;
  static deserializeBinaryFromReader(message: AccountInfoAttachment, reader: jspb.BinaryReader): AccountInfoAttachment;
}

export namespace AccountInfoAttachment {
  export type AsObject = {
    version: number;
    name: string;
    description: string;
  }
}

export class AssetIssuanceAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getDescription(): string;
  setDescription(value: string): void;
  getQuantity(): number;
  setQuantity(value: number): void;
  getDecimals(): number;
  setDecimals(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetIssuanceAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AssetIssuanceAttachment): AssetIssuanceAttachment.AsObject;
  static serializeBinaryToWriter(message: AssetIssuanceAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetIssuanceAttachment;
  static deserializeBinaryFromReader(message: AssetIssuanceAttachment, reader: jspb.BinaryReader): AssetIssuanceAttachment;
}

export namespace AssetIssuanceAttachment {
  export type AsObject = {
    version: number;
    name: string;
    description: string;
    quantity: number;
    decimals: number;
  }
}

export class AssetTransferAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getId(): number;
  setId(value: number): void;
  getQuantity(): number;
  setQuantity(value: number): void;
  getComment(): string;
  setComment(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetTransferAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AssetTransferAttachment): AssetTransferAttachment.AsObject;
  static serializeBinaryToWriter(message: AssetTransferAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetTransferAttachment;
  static deserializeBinaryFromReader(message: AssetTransferAttachment, reader: jspb.BinaryReader): AssetTransferAttachment;
}

export namespace AssetTransferAttachment {
  export type AsObject = {
    version: number;
    id: number;
    quantity: number;
    comment: string;
  }
}

export class AssetOrderPlacementAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getId(): number;
  setId(value: number): void;
  getQuantity(): number;
  setQuantity(value: number): void;
  getPrice(): number;
  setPrice(value: number): void;
  getType(): AssetOrderPlacementAttachment.Type;
  setType(value: AssetOrderPlacementAttachment.Type): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetOrderPlacementAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AssetOrderPlacementAttachment): AssetOrderPlacementAttachment.AsObject;
  static serializeBinaryToWriter(message: AssetOrderPlacementAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetOrderPlacementAttachment;
  static deserializeBinaryFromReader(message: AssetOrderPlacementAttachment, reader: jspb.BinaryReader): AssetOrderPlacementAttachment;
}

export namespace AssetOrderPlacementAttachment {
  export type AsObject = {
    version: number;
    id: number;
    quantity: number;
    price: number;
    type: AssetOrderPlacementAttachment.Type;
  }

  export enum Type { 
    ASK = 0,
    BID = 1,
  }
}

export class AssetOrderCancellationAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getOrderid(): number;
  setOrderid(value: number): void;
  getType(): AssetOrderCancellationAttachment.Type;
  setType(value: AssetOrderCancellationAttachment.Type): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetOrderCancellationAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: AssetOrderCancellationAttachment): AssetOrderCancellationAttachment.AsObject;
  static serializeBinaryToWriter(message: AssetOrderCancellationAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetOrderCancellationAttachment;
  static deserializeBinaryFromReader(message: AssetOrderCancellationAttachment, reader: jspb.BinaryReader): AssetOrderCancellationAttachment;
}

export namespace AssetOrderCancellationAttachment {
  export type AsObject = {
    version: number;
    orderid: number;
    type: AssetOrderCancellationAttachment.Type;
  }

  export enum Type { 
    ASK = 0,
    BID = 1,
  }
}

export class DigitalGoodsListingAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getDescription(): string;
  setDescription(value: string): void;
  getTags(): string;
  setTags(value: string): void;
  getQuantity(): number;
  setQuantity(value: number): void;
  getPrice(): number;
  setPrice(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsListingAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsListingAttachment): DigitalGoodsListingAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsListingAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsListingAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsListingAttachment, reader: jspb.BinaryReader): DigitalGoodsListingAttachment;
}

export namespace DigitalGoodsListingAttachment {
  export type AsObject = {
    version: number;
    name: string;
    description: string;
    tags: string;
    quantity: number;
    price: number;
  }
}

export class DigitalGoodsDelistingAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getGoodsid(): number;
  setGoodsid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsDelistingAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsDelistingAttachment): DigitalGoodsDelistingAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsDelistingAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsDelistingAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsDelistingAttachment, reader: jspb.BinaryReader): DigitalGoodsDelistingAttachment;
}

export namespace DigitalGoodsDelistingAttachment {
  export type AsObject = {
    version: number;
    goodsid: number;
  }
}

export class DigitalGoodsPriceChangeAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getGoodsid(): number;
  setGoodsid(value: number): void;
  getPrice(): number;
  setPrice(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsPriceChangeAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsPriceChangeAttachment): DigitalGoodsPriceChangeAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsPriceChangeAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsPriceChangeAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsPriceChangeAttachment, reader: jspb.BinaryReader): DigitalGoodsPriceChangeAttachment;
}

export namespace DigitalGoodsPriceChangeAttachment {
  export type AsObject = {
    version: number;
    goodsid: number;
    price: number;
  }
}

export class DigitalGoodsQuantityChangeAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getGoodsid(): number;
  setGoodsid(value: number): void;
  getDeltaquantity(): number;
  setDeltaquantity(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsQuantityChangeAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsQuantityChangeAttachment): DigitalGoodsQuantityChangeAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsQuantityChangeAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsQuantityChangeAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsQuantityChangeAttachment, reader: jspb.BinaryReader): DigitalGoodsQuantityChangeAttachment;
}

export namespace DigitalGoodsQuantityChangeAttachment {
  export type AsObject = {
    version: number;
    goodsid: number;
    deltaquantity: number;
  }
}

export class DigitalGoodsPurchaseAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getGoodsid(): number;
  setGoodsid(value: number): void;
  getQuantity(): number;
  setQuantity(value: number): void;
  getPrice(): number;
  setPrice(value: number): void;
  getDeliverydeadlinetimestmap(): number;
  setDeliverydeadlinetimestmap(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsPurchaseAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsPurchaseAttachment): DigitalGoodsPurchaseAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsPurchaseAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsPurchaseAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsPurchaseAttachment, reader: jspb.BinaryReader): DigitalGoodsPurchaseAttachment;
}

export namespace DigitalGoodsPurchaseAttachment {
  export type AsObject = {
    version: number;
    goodsid: number;
    quantity: number;
    price: number;
    deliverydeadlinetimestmap: number;
  }
}

export class DigitalGoodsDeliveryAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getPurchaseid(): number;
  setPurchaseid(value: number): void;
  getDiscount(): number;
  setDiscount(value: number): void;
  getData(): {};
  setData(value: {}): void;
  getNonce(): {};
  setNonce(value: {}): void;
  getIstext(): boolean;
  setIstext(value: boolean): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsDeliveryAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsDeliveryAttachment): DigitalGoodsDeliveryAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsDeliveryAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsDeliveryAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsDeliveryAttachment, reader: jspb.BinaryReader): DigitalGoodsDeliveryAttachment;
}

export namespace DigitalGoodsDeliveryAttachment {
  export type AsObject = {
    version: number;
    purchaseid: number;
    discount: number;
    data: {};
    nonce: {};
    istext: boolean;
  }
}

export class DigitalGoodsFeedbackAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getPurchaseid(): number;
  setPurchaseid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsFeedbackAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsFeedbackAttachment): DigitalGoodsFeedbackAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsFeedbackAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsFeedbackAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsFeedbackAttachment, reader: jspb.BinaryReader): DigitalGoodsFeedbackAttachment;
}

export namespace DigitalGoodsFeedbackAttachment {
  export type AsObject = {
    version: number;
    purchaseid: number;
  }
}

export class DigitalGoodsRefundAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getPurchaseid(): number;
  setPurchaseid(value: number): void;
  getRefund(): number;
  setRefund(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalGoodsRefundAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalGoodsRefundAttachment): DigitalGoodsRefundAttachment.AsObject;
  static serializeBinaryToWriter(message: DigitalGoodsRefundAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalGoodsRefundAttachment;
  static deserializeBinaryFromReader(message: DigitalGoodsRefundAttachment, reader: jspb.BinaryReader): DigitalGoodsRefundAttachment;
}

export namespace DigitalGoodsRefundAttachment {
  export type AsObject = {
    version: number;
    purchaseid: number;
    refund: number;
  }
}

export class EffectiveBalanceLeasingAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getPeriod(): number;
  setPeriod(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectiveBalanceLeasingAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EffectiveBalanceLeasingAttachment): EffectiveBalanceLeasingAttachment.AsObject;
  static serializeBinaryToWriter(message: EffectiveBalanceLeasingAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectiveBalanceLeasingAttachment;
  static deserializeBinaryFromReader(message: EffectiveBalanceLeasingAttachment, reader: jspb.BinaryReader): EffectiveBalanceLeasingAttachment;
}

export namespace EffectiveBalanceLeasingAttachment {
  export type AsObject = {
    version: number;
    period: number;
  }
}

export class RewardRecipientAssignmentAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardRecipientAssignmentAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: RewardRecipientAssignmentAttachment): RewardRecipientAssignmentAttachment.AsObject;
  static serializeBinaryToWriter(message: RewardRecipientAssignmentAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardRecipientAssignmentAttachment;
  static deserializeBinaryFromReader(message: RewardRecipientAssignmentAttachment, reader: jspb.BinaryReader): RewardRecipientAssignmentAttachment;
}

export namespace RewardRecipientAssignmentAttachment {
  export type AsObject = {
    version: number;
  }
}

export class EscrowCreationAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getAmount(): number;
  setAmount(value: number): void;
  getRequiredsigners(): number;
  setRequiredsigners(value: number): void;
  getSignersList(): number[];
  setSignersList(value: number[]): void;
  clearSignersList(): void;
  getDeadline(): number;
  setDeadline(value: number): void;
  getDeadlineaction(): EscrowDecisionType;
  setDeadlineaction(value: EscrowDecisionType): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscrowCreationAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EscrowCreationAttachment): EscrowCreationAttachment.AsObject;
  static serializeBinaryToWriter(message: EscrowCreationAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscrowCreationAttachment;
  static deserializeBinaryFromReader(message: EscrowCreationAttachment, reader: jspb.BinaryReader): EscrowCreationAttachment;
}

export namespace EscrowCreationAttachment {
  export type AsObject = {
    version: number;
    amount: number;
    requiredsigners: number;
    signersList: number[];
    deadline: number;
    deadlineaction: EscrowDecisionType;
  }
}

export class EscrowSignAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getEscrowid(): number;
  setEscrowid(value: number): void;
  getDecision(): EscrowDecisionType;
  setDecision(value: EscrowDecisionType): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscrowSignAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EscrowSignAttachment): EscrowSignAttachment.AsObject;
  static serializeBinaryToWriter(message: EscrowSignAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscrowSignAttachment;
  static deserializeBinaryFromReader(message: EscrowSignAttachment, reader: jspb.BinaryReader): EscrowSignAttachment;
}

export namespace EscrowSignAttachment {
  export type AsObject = {
    version: number;
    escrowid: number;
    decision: EscrowDecisionType;
  }
}

export class EscrowResultAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getEscrowid(): number;
  setEscrowid(value: number): void;
  getDecision(): EscrowDecisionType;
  setDecision(value: EscrowDecisionType): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscrowResultAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: EscrowResultAttachment): EscrowResultAttachment.AsObject;
  static serializeBinaryToWriter(message: EscrowResultAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscrowResultAttachment;
  static deserializeBinaryFromReader(message: EscrowResultAttachment, reader: jspb.BinaryReader): EscrowResultAttachment;
}

export namespace EscrowResultAttachment {
  export type AsObject = {
    version: number;
    escrowid: number;
    decision: EscrowDecisionType;
  }
}

export class SubscriptionSubscribeAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getFrequency(): number;
  setFrequency(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionSubscribeAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionSubscribeAttachment): SubscriptionSubscribeAttachment.AsObject;
  static serializeBinaryToWriter(message: SubscriptionSubscribeAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionSubscribeAttachment;
  static deserializeBinaryFromReader(message: SubscriptionSubscribeAttachment, reader: jspb.BinaryReader): SubscriptionSubscribeAttachment;
}

export namespace SubscriptionSubscribeAttachment {
  export type AsObject = {
    version: number;
    frequency: number;
  }
}

export class SubscriptionCancelAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getSubscriptionid(): number;
  setSubscriptionid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionCancelAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionCancelAttachment): SubscriptionCancelAttachment.AsObject;
  static serializeBinaryToWriter(message: SubscriptionCancelAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionCancelAttachment;
  static deserializeBinaryFromReader(message: SubscriptionCancelAttachment, reader: jspb.BinaryReader): SubscriptionCancelAttachment;
}

export namespace SubscriptionCancelAttachment {
  export type AsObject = {
    version: number;
    subscriptionid: number;
  }
}

export class SubscriptionPaymentAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getSucscriptionid(): number;
  setSucscriptionid(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPaymentAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPaymentAttachment): SubscriptionPaymentAttachment.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPaymentAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPaymentAttachment;
  static deserializeBinaryFromReader(message: SubscriptionPaymentAttachment, reader: jspb.BinaryReader): SubscriptionPaymentAttachment;
}

export namespace SubscriptionPaymentAttachment {
  export type AsObject = {
    version: number;
    sucscriptionid: number;
  }
}

export class ATCreationAttachment extends jspb.Message {
  constructor ();
  getVersion(): number;
  setVersion(value: number): void;
  getName(): string;
  setName(value: string): void;
  getDescription(): string;
  setDescription(value: string): void;
  getCreationbytes(): {};
  setCreationbytes(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ATCreationAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: ATCreationAttachment): ATCreationAttachment.AsObject;
  static serializeBinaryToWriter(message: ATCreationAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ATCreationAttachment;
  static deserializeBinaryFromReader(message: ATCreationAttachment, reader: jspb.BinaryReader): ATCreationAttachment;
}

export namespace ATCreationAttachment {
  export type AsObject = {
    version: number;
    name: string;
    description: string;
    creationbytes: {};
  }
}

export class Accounts extends jspb.Message {
  constructor ();
  getAccountidsList(): number[];
  setAccountidsList(value: number[]): void;
  clearAccountidsList(): void;
  getAccountsList(): Account[] | undefined;
  setAccountsList(value?: Account[]): void;
  clearAccountsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Accounts.AsObject;
  static toObject(includeInstance: boolean, msg: Accounts): Accounts.AsObject;
  static serializeBinaryToWriter(message: Accounts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Accounts;
  static deserializeBinaryFromReader(message: Accounts, reader: jspb.BinaryReader): Accounts;
}

export namespace Accounts {
  export type AsObject = {
    accountidsList: number[];
    accountsList?: Account.AsObject[];
  }
}

export class Account extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getPublickey(): {};
  setPublickey(value: {}): void;
  getBalance(): number;
  setBalance(value: number): void;
  getUnconfirmedbalance(): number;
  setUnconfirmedbalance(value: number): void;
  getForgedbalance(): number;
  setForgedbalance(value: number): void;
  getName(): string;
  setName(value: string): void;
  getDescription(): string;
  setDescription(value: string): void;
  getRewardrecipient(): number;
  setRewardrecipient(value: number): void;
  getAssetbalancesList(): AssetBalance[] | undefined;
  setAssetbalancesList(value?: AssetBalance[]): void;
  clearAssetbalancesList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: number;
    publickey: {};
    balance: number;
    unconfirmedbalance: number;
    forgedbalance: number;
    name: string;
    description: string;
    rewardrecipient: number;
    assetbalancesList?: AssetBalance.AsObject[];
  }
}

export class AssetBalance extends jspb.Message {
  constructor ();
  getId(): number;
  setId(value: number): void;
  getBalance(): number;
  setBalance(value: number): void;
  getUnconfirmedbalance(): number;
  setUnconfirmedbalance(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetBalance.AsObject;
  static toObject(includeInstance: boolean, msg: AssetBalance): AssetBalance.AsObject;
  static serializeBinaryToWriter(message: AssetBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetBalance;
  static deserializeBinaryFromReader(message: AssetBalance, reader: jspb.BinaryReader): AssetBalance;
}

export namespace AssetBalance {
  export type AsObject = {
    id: number;
    balance: number;
    unconfirmedbalance: number;
  }
}

export class MiningInfo extends jspb.Message {
  constructor ();
  getHeight(): number;
  setHeight(value: number): void;
  getGenerationsignature(): {};
  setGenerationsignature(value: {}): void;
  getBasetarget(): number;
  setBasetarget(value: number): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MiningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MiningInfo): MiningInfo.AsObject;
  static serializeBinaryToWriter(message: MiningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MiningInfo;
  static deserializeBinaryFromReader(message: MiningInfo, reader: jspb.BinaryReader): MiningInfo;
}

export namespace MiningInfo {
  export type AsObject = {
    height: number;
    generationsignature: {};
    basetarget: number;
  }
}

export class TransactionBytes extends jspb.Message {
  constructor ();
  getTransactionbytes(): {};
  setTransactionbytes(value: {}): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBytes.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBytes): TransactionBytes.AsObject;
  static serializeBinaryToWriter(message: TransactionBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBytes;
  static deserializeBinaryFromReader(message: TransactionBytes, reader: jspb.BinaryReader): TransactionBytes;
}

export namespace TransactionBytes {
  export type AsObject = {
    transactionbytes: {};
  }
}

export enum EscrowDecisionType { 
  UNDECIDED = 0,
  RELEASE = 1,
  REFUND = 2,
  SPLIT = 3,
}

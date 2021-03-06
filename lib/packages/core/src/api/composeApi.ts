/** @module core.api */
/**
 * Copyright (c) 2019 Burst Apps Team
 */
import {BurstService} from '../service/burstService';
import {BurstServiceSettings} from '../service/burstServiceSettings';
import {Api} from '../typings/api';
import {ApiVersion} from '../constants/apiVersion';
import {ApiComposer} from './apiComposer';
import {getBlockByTimestamp} from './factories/block/getBlockByTimestamp';
import {getBlockByHeight} from './factories/block/getBlockByHeight';
import {getBlockById} from './factories/block/getBlockById';
import {getBlockId} from './factories/block/getBlockId';
import {getBlocks} from './factories/block/getBlocks';
import {getBlockchainStatus} from './factories/network/getBlockchainStatus';
import {getServerStatus} from './factories/network/getServerStatus';
import {broadcastTransaction} from './factories/transaction/broadcastTransaction';
import {getTransaction} from './factories/transaction/getTransaction';
import {sendTextMessage} from './factories/message/sendTextMessage';
import {sendEncryptedTextMessage} from './factories/message/sendEncryptedTextMessage';
import {getAccountTransactions} from './factories/account/getAccountTransactions';
import {getUnconfirmedAccountTransactions} from './factories/account/getUnconfirmedAccountTransactions';
import {getAccountBalance} from './factories/account/getAccountBalance';
import {generateSendTransactionQRCode} from './factories/account/generateSendTransactionQRCode';
import {generateSendTransactionQRCodeAddress} from './factories/account/generateSendTransactionQRCodeAddress';
import {suggestFee} from './factories/network/suggestFee';
import {getPeer} from './factories/network/getPeer';
import {getPeers} from './factories/network/getPeers';
import {getAliases} from './factories/account/getAliases';
import {setAlias} from './factories/account/setAlias';
import {getTime} from './factories/network/getTime';
import {getAccount} from './factories/account/getAccount';
import {getAccountBlocks} from './factories/account/getAccountBlocks';
import {getAccountBlockIds} from './factories/account/getAccountBlockIds';
import {setAccountInfo} from './factories/account/setAccountInfo';
import {setRewardRecipient} from './factories/account/setRewardRecipient';
import {getAliasById} from './factories/alias/getAliasById';
import {getAliasByName} from './factories/alias/getAliasByName';
import {getContractsByAccount} from './factories/contract/getContractsByAccount';
import {getContract} from './factories/contract/getContract';
import {
    sendAmount,
    sendAmountToMultipleRecipients,
    sendAmountToSingleRecipient,
    sendSameAmountToMultipleRecipients
} from './factories/transaction';


/**
 * Context for API used in [[composeApi]]
 */
export class ApiSettings {
    constructor(
        public nodeHost: string,
        public apiRootUrl: string,
        public apiVersion: ApiVersion = ApiVersion.V1
    ) {
    }
}

/**
 * Composes the API, i.e. setup the environment and mounts the API structure
 * with its functions.
 *
 * ```ts
 * const api = composeApi({
 *   nodeHost: 'https://wallet1.burst-team.us:2083', // one of the mainnet nodes
 *   apiRootUrl: '/burst' // endpoint to the BURST API
 * })
 * ```
 *
 * > Note, that this method mounts the __entire__ API, i.e. all available methods. One may also customize the API composition
 * using [[ApiComposer]].
 *
 * @param settings necessary execution context
 * @return The _complete_ API
 */
export function composeApi(settings: ApiSettings): Api {

    const serviceSettings: BurstServiceSettings = {...settings};
    const service = new BurstService(serviceSettings);

    return ApiComposer
        .create(service)
        .withBlockApi({
            getBlockByTimestamp,
            getBlockByHeight,
            getBlockById,
            getBlockId,
            getBlocks,
        })
        .withNetworkApi({
            getBlockchainStatus,
            getServerStatus,
            suggestFee,
            getPeers,
            getPeer,
            getTime,
        })
        .withTransactionApi({
            broadcastTransaction,
            getTransaction,
            sendAmount,
            sendAmountToSingleRecipient,
            sendAmountToMultipleRecipients,
            sendSameAmountToMultipleRecipients,
        })
        .withMessageApi({
            sendTextMessage,
            sendEncryptedTextMessage,
        })
        .withAccountApi({
            getAccountTransactions,
            getUnconfirmedAccountTransactions,
            getAccountBalance,
            generateSendTransactionQRCode,
            generateSendTransactionQRCodeAddress,
            getAliases,
            setAlias,
            getAccount,
            getAccountBlocks,
            getAccountBlockIds,
            setAccountInfo,
            setRewardRecipient,
        }).withAliasApi({
            getAliasByName,
            getAliasById,
            setAlias
        }).withContractApi({
            getContract,
            getContractsByAccount
        })
        .compose();

}

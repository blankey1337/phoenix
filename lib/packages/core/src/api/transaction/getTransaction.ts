/**
 * Original work Copyright (c) 2018 PoC-Consortium  
 * Modified work Copyright (c) 2019 Burst Apps Team
 */
import {BurstService} from '../../burstService';
import {BlockId, Transaction} from '../..';
import {TransactionId} from '../../typings/transactionId';

/**
 * Get a transaction from the network/blockchain
 *
 * @param transactionId The transaction Id
 * @return The Transaction
 */
export const getTransaction = (service: BurstService):
    (transactionId: string) => Promise<Transaction> =>
    (transactionId: string): Promise<Transaction> =>
        service.query('getTransaction', {transaction: transactionId});

/**
 * Original work Copyright (c) 2018 PoC-Consortium  
 * Modified work Copyright (c) 2019 Burst Apps Team
 */

import { BurstUtil } from "@burstjs/core"

/*
* Convert Burst Address back to account id
*/
export const getAccountIdFromBurstAddress = (address: string): string => {
    return BurstUtil.decode(address);
}

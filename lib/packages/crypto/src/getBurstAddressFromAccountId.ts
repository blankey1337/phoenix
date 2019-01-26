/**
 * Original work Copyright (c) 2018 PoC-Consortium  
 * Modified work Copyright (c) 2019 Burst Apps Team
 */

import { BurstUtil } from "@burstjs/core";

/*
* Convert the account id to the appropriate Burst address
*/
export const getBurstAddressFromAccountId = (id: string): string => {
    return BurstUtil.encode(id);
}

/**
 * Original work Copyright (c) 2018 PoC-Consortium  
 * Modified work Copyright (c) 2019 Burst Apps Team
 */

import * as CryptoJS from "crypto-js";

/*
* Hash string into hex string
*/
export const hashSHA256 = (input: string): string => {
    return CryptoJS.SHA256(input).toString();
}
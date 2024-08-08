import { atom } from "recoil";

export const transactionsState = atom({
    key: 'transactions',
    default: []
})
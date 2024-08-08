import { selector } from "recoil";
import { transactionsState } from "../atoms/transactionsAtom";

export const balanceSelector = selector({
    key: 'balanceSelector',
    get: ({ get }) => {
        const transactions = get(transactionsState)
        return transactions.reduce((balance, t) => {
            return balance + t.value
        }, 0)
    }
})
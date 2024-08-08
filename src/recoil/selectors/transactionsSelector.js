import { selector } from "recoil";
import { transactionsState } from "../atoms/transactionsAtom";

export const transactionsSelector = selector({
    key: 'transactionsSelector',
    get: ({ get }) => {
        const transactions = get(transactionsState)
        return transactions.map(t => {
            return {
                ...t,
                date: new Date(t.date)
            }
        })
    }
})
import { useRecoilValue } from "recoil";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";
import { transactionsSelector } from "../../recoil/selectors/transactionsSelector";

// const transactions = [
//     {
//         id: 1,
//         value: 150,
//         type: 'Depósito',
//         date: new Date(2022, 10, 18)
//     },
//     {
//         id: 2,
//         value: 200,
//         type: 'Saque',
//         date: new Date(2022, 10, 19)
//     },
//     {
//         id: 3,
//         value: 300,
//         type: 'Transferência',
//         date: new Date(2022, 10, 20)
//     },
//     {
//         id: 4,
//         value: 500,
//         type: 'Depósito',
//         date: new Date(2022, 10, 21)
//     }
// ];

export const Statement = () => {
    const transactions = useRecoilValue(transactionsSelector)
    return (<Container>
        <Heading>
            Extrato
        </Heading>
        <TransactionsList>
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
        </TransactionsList>
    </Container>)
}
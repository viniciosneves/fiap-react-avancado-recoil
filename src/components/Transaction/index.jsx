import { MonthLabel, TransactionAmount, TransactionDate, TransactionDivider, TransactionInfo, TransactionType, TransactionWrapper } from "./styles";
import PropTypes from 'prop-types';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
};

const getMonthName = (date) => {
    const options = { month: 'long' };
    return date.toLocaleDateString('pt-BR', options);
};

export const Transaction = ({ transaction }) => {
    const { value, type, date } = transaction;
    const month = getMonthName(date);
    const formattedDate = formatDate(date);
    const formattedValue = currencyFormatter.format(value);

    return (
        <TransactionWrapper>
            <MonthLabel>{month}</MonthLabel>
            <TransactionInfo>
                <TransactionType>{type}</TransactionType>
                <TransactionDate>{formattedDate}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount>{formattedValue}</TransactionAmount>
            <TransactionDivider />
        </TransactionWrapper>
    );
};

Transaction.propTypes = {
    transaction: PropTypes.shape({
        value: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired
    }).isRequired
};
import styled from "styled-components";
import PropTypes from 'prop-types';
import { IconEye } from "../Icons";

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

const StyledBalance = styled.div`
    h3 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 24px;
        border-bottom: 2px solid #FF5031;
        padding: 16px 0;
        margin: 0;
        margin-bottom: 16px;
    }
    p {
        font-size: 16px;
        margin : 0;
        margin-bottom: 8px;
    }
    strong {
        font-size: 31px;
    }
`

export const Balance = ({ valor }) => {
    return <StyledBalance>
        <h3>
            Saldo
            <IconEye />
        </h3>
        <p>Conta Corrente</p>
        <strong>
            {formatter.format(valor)}
        </strong>
    </StyledBalance>
}

Balance.propTypes = {
    valor: PropTypes.number.isRequired
};
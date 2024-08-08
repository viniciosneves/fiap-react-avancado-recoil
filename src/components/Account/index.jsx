import { useRecoilValue } from "recoil";
import { Balance } from "./Balance";
import { BalanceWrapper, Card, DateWrapper, Heading } from "./styles"
import { balanceSelector } from "../../recoil/selectors/balanceSelector";


const options = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

export const Account = () => {

    const balance = useRecoilValue(balanceSelector)

    return (<Card>
        <div>
            <Heading>
                Olá, Joana! :)
            </Heading>
            <DateWrapper>
                {new Date().toLocaleDateString('pt-BR', options)}
            </DateWrapper>
        </div>
        <BalanceWrapper>
            <Balance valor={balance}/>
        </BalanceWrapper>
    </Card>)
}
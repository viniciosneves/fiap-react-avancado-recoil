import { Balance } from "./Balance";
import { BalanceWrapper, Card, DateWrapper, Heading } from "./styles"


const options = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

export const Account = () => {
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
            <Balance valor={2500}/>
        </BalanceWrapper>
    </Card>)
}
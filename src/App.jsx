import styled from "styled-components"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Account } from "./components/Account"
import { TransactionForm } from "./components/TransactionForm"
import { Statement } from "./components/Statement"

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 1200px;
  margin: 24px auto;
`

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 34px;
`

function App() {

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Main>
          <Account />
          <TransactionForm />
        </Main>
        <div>
          <Statement />
        </div>
      </Container>
    </>
  )
}

export default App

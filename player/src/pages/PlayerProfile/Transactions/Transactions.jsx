import React from 'react'
// Styles
import {Container, Wrapper} from "./Transactions.styles"
import Title from '../../../components/Title/Title';
import TransactionsTable from '../../../components/TransactionsTable';
const Transactions = () => {
  return (
    <Wrapper>
      <Container>
          <Title title={"TRANSACTIONS"} />
          <TransactionsTable />
      </Container>
    </Wrapper>
  );
}

export default Transactions
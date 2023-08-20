import React from 'react'
// Styles
import {Wrapper} from "./Transactions.styles"
import Title from '../../../components/Title/Title';
import TransactionsTable from '../../../components/TransactionsTable';
const Transactions = () => {
  return (
    <Wrapper>
      <Title title={"TRANSACTIONS"} />
      <TransactionsTable />
    </Wrapper>
  );
}

export default Transactions
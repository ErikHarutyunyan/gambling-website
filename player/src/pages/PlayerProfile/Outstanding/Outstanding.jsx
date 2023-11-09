import React from 'react'
// Styles
import {Container, Wrapper} from "./Outstanding.styles"
import Title from '../../../components/Title/Title'
import OutstandingTable from '../../../components/OutstandingTable/OutstandingTable';
const Outstanding = () => {
  return (
    <Wrapper>
      <Container>
      <Title title={"OUTSTANDING"} />
      <OutstandingTable />

      </Container>
    </Wrapper>
  );
}

export default Outstanding
import React from 'react'
// Styles
import { Wrapper, Container } from "./CallAgent.styles";
// Images
import agentCall from "../../assets/images/agentCall.png";
import Subheading from '../../components/Subheading';
import AgentList from '../../components/AgentList';
const CallAgent = () => {
  return (
    <>
      <Subheading />
      <Wrapper backImg={agentCall}>
        <Container>
          <div>
            <h2>OUR OFFICIAL</h2>
            <h2>AGENTS</h2>
          </div>
          
          
        </Container>
      </Wrapper>
      <AgentList />
    </>
  );
}

export default CallAgent
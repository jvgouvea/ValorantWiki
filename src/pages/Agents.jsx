import React from 'react';

import AgentsList from '../components/AgentsList';
import Title from '../components/Title';
import Container from '../components/Container';

const Agents = () => {
  return (
    <Container>
      <Title text="Agentes" margin="0 0 30px"/>
      <AgentsList />
    </Container>
  );
};

export default Agents;

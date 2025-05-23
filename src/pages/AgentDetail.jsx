import React from 'react';
import { useParams } from 'react-router-dom';
import Agent from '../components/Agent';

function AgentDetail() {
  const { uuid } = useParams();

  return (
    <Agent uuid={uuid}/>
  );
}

export default AgentDetail;

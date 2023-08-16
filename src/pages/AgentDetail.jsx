import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ValorantApiContext } from '../context/ValorantApi';

function AgentDetail() {
  const { uuid } = useParams();
  const { agentDetails, setUuid } = useContext(ValorantApiContext);

  setUuid(uuid);

  return (
    <div>
      <h2>{agentDetails?.data?.displayName}</h2>
      <p>UUID: {uuid}</p>
    </div>
  );
}

export default AgentDetail;

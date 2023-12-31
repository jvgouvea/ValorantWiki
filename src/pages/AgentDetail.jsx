import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAgentDetails } from '../Api';
import { ValorantApiContext } from '../context/ValorantApi';

import ServiceUnavailable from '../components/ServiceUnavailable';

function AgentDetail() {
  const [agentDetails, setAgentDetails] = useState();

  const { uuid } = useParams();
  const { languageApi, setLoading } = useContext(ValorantApiContext);

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const agentDetailsData = await fetchAgentDetails(uuid, languageApi);

          setAgentDetails(agentDetailsData);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageApi, uuid]);

  console.log(agentDetails);

  return (
    <div>
      {agentDetails?.status === 200 ? (
        <div>
          <h2>{agentDetails?.data?.displayName}</h2>
          <p>UUID: {uuid}</p>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </div>
  );
}

export default AgentDetail;



import React, { useEffect, useState, useContext } from 'react';
import Container from '../components/Container';
import PropTypes from 'prop-types';

import { fetchAgentDetails } from '../Api';
import { ValorantApiContext } from '../context/ValorantApi';

import Loading from '../components/Loading';
import ServiceUnavailable from '../components/ServiceUnavailable';

function Agent({ uuid }) {
  const [agent, setAgent] = useState();
  const { languageApi } = useContext(ValorantApiContext);

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const agentData = await fetchAgentDetails(uuid, languageApi);

          setAgent(agentData);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageApi, uuid]);

  console.log(agent);

  return (
    <Container>
      {agent === undefined ? (
        <Loading />
      ) : agent.status === 200 ? (
        <div className="agent_content">
          <div className="agent_content__info">
              <div className="agent_content__info___img">
                <img src={agent.data?.fullPortrait} alt={agent.data?.displayName} />
              </div>
              <div className="agent_content__info___text">
                  <h2>{agent.data?.displayName}</h2>
                  <p>{agent.data?.description}</p>
                  <h3>{agent.data?.role.displayName}</h3>
                  <p>{agent.data?.role.description}</p>
              </div>
          </div>
          <div className="agent_content__abilities">
            <h4>Habilidades</h4>
            <ul>
                {agent.data?.abilities.map((ability) => (
                    <li key={ability.slot}>
                        <div className="agent_content__abilities___img"><img src={ability.displayIcon} alt={ability.displayName} /></div>
                        <div className="agent_content__abilities___text">
                            <span>{ability.displayName}</span>
                            <p>{ability.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </Container>
  );
}

Agent.propTypes = {
   uuid: PropTypes.string.isRequired,
};

export default Agent;

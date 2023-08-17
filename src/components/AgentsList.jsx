import React, { useState, useContext } from 'react';

import { ValorantApiContext } from '../context/ValorantApi';

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

import Container from '../components/Container';
import Title from '../components/Title';
import ServiceUnavailable from '../components/ServiceUnavailable';
import AgentCard from './AgentCard';

const AgentsList = () => {
  const { agents } = useContext(ValorantApiContext);
  const [filterName, setFilterName] = useState('');

  const filteredAgents = agents.data.filter(({ displayName }) =>
    displayName.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <Container>
      <Title text="AGENTES" margin="70px 0 30px" color="primary-black" />
      {agents.status === 200 ? (
        <div>
          <div className="agents-filter">
            <input
              type="text"
              placeholder="Pesquisar por agente"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
            <SearchIcon />
          </div>
          <ul className="agents-list">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <li key={agent.uuid}>
                  <AgentCard
                    uuid={agent.uuid}
                    displayName={agent.displayName}
                    fullPortrait={agent.fullPortrait}
                  />
                </li>
              ))
            ) : (
              <p>Nenhum agente encontrado</p>
            )}
          </ul>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </Container>
  );
};

export default AgentsList;

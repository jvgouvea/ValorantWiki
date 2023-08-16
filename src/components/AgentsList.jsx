import React, { useState, useContext } from 'react';

import { ValorantApiContext } from '../context/ValorantApi';

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import AgentCard from './AgentCard';

const AgentsList = () => {
  const { agents } = useContext(ValorantApiContext);
  const [filterName, setFilterName] = useState('');

  const filteredAgents = agents.data.filter(({ displayName }) =>
    displayName.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <>
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
        <p className="unavailable-service">Serviço indisponível</p>
      )}
    </>
  );
};

export default AgentsList;

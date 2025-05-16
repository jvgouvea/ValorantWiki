import React from 'react';
import { Link } from 'react-router-dom';

const AgentCard = ({ uuid, displayName, fullPortrait }) => {
  return (
    <div className="agent_card">
      <Link to={`/agente/${displayName}/${uuid}`}>
        <p className="agent_card__name">{displayName}</p>
        <img
          className="agent_card__img"
          src={fullPortrait}
          alt={`Agente ${displayName}`}
        />
      </Link>
    </div>
  );
};

export default AgentCard;

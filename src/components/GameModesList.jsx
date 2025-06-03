import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ServiceUnavailable from '../components/ServiceUnavailable';

const GameModeslist = () => {
  const { gameModes } = useContext(ValorantApiContext);

  console.log(gameModes.data);
  

  return (
    <div className="game-modes-list_container">
      <Container>
        <Title text="MODOS DE JOGO" margin="70px 0 60px" tag="h2" color="primary-black" />
        {gameModes.status === 200 ? (
          <div className="game-modes-list_content">
            <ul>
              {gameModes.data?.map((mode) => (
                <li key={mode.uuid}>
                  <Link to={`${mode.displayName}/${mode.uuid}`}>
                    {mode.displayIcon ? (
                      <img src={mode.displayIcon} alt={mode.displayName} />
                    ) : null}
                    <h4>{mode.displayName}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ServiceUnavailable />
        )}
      </Container>
    </div>
  );
};

export default GameModeslist;

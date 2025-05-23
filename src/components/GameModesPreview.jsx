import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ButtonSeeMore from '../components/ButtonSeeMore';
import ServiceUnavailable from '../components/ServiceUnavailable';

const GameModesPreview = () => {
  const { gameModes } = useContext(ValorantApiContext);
  const firstFourGameModes = gameModes.data.slice(0, 4);

  return (
    <div className="game-modes-preview_container">
      <Container>
        <Title text="MODOS DE JOGO" margin="0 0 40px" tag="h2" color="white" />
        {gameModes?.status === 200 ? (
          <div className="game-modes-preview_content">
            <ul className="game-modes-preview_list">
              {firstFourGameModes.map((mode) => (
                <li key={mode.uuid}>
                  <Link to={`modos-de-jogo/${mode.displayName}/${mode.uuid}`}>
                    <img src={mode.displayIcon} alt={mode.displayName} />
                    <h4>{mode.displayName}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ServiceUnavailable />
        )}
        <ButtonSeeMore
          text="Ver todos os modos"
          link="modos-de-jogo"
          type="white"
          margin="50px 0 0"
        />
      </Container>
    </div>
  );
};

export default GameModesPreview;

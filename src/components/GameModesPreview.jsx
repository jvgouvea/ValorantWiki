import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ButtonSeeMore from '../components/ButtonSeeMore';

const GameModesPreview = () => {
  const { gameModes } = useContext(ValorantApiContext);
  const firstFourGameModes = gameModes.data.slice(0, 4);

  return (
    <div className="game-modes-preview_container">
      <Container>
        <Title text="MODOS DE JOGO" margin="0 0 40px" tag="h2" color="white" />
        {gameModes.status === 200 ? (
          <div className="game-modes-preview_content">
            <ul className="game-modes-preview_list">
              {firstFourGameModes.length > 0 ? (
                firstFourGameModes.map((map) => (
                  <li key={map.uuid}>
                    <Link to={`/modos-de-jogo/${map.uuid}`}>
                      <img src={map.displayIcon} alt={map.displayName} />
                      <h4>{map.displayName}</h4>
                    </Link>
                  </li>
                ))
              ) : (
                <p>Nenhum mapa encontrado</p>
              )}
            </ul>
          </div>
        ) : (
          <p className="unavailable-service">Serviço indisponível</p>
        )}
      <ButtonSeeMore text='Ver todos os modos' link='modos-de-jogo' type='white' margin='50px 0 0'/>
      </Container>
    </div>
  );
};

export default GameModesPreview;

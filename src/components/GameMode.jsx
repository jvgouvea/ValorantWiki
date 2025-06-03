

import React, { useEffect, useState, useContext } from 'react';
import Container from '../components/Container';
import PropTypes from 'prop-types';

import { fetchGameModeDetails } from '../Api';
import { ValorantApiContext } from '../context/ValorantApi';

import Loading from '../components/Loading';
import ServiceUnavailable from '../components/ServiceUnavailable';

function GameMode({ uuid }) {
  const [gameMode, setGameMode] = useState();
  const { languageApi } = useContext(ValorantApiContext);

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const gameModeData = await fetchGameModeDetails(uuid, languageApi);

          setGameMode(gameModeData);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageApi, uuid]);

  console.log(gameMode);

  return (
    <Container>
      {gameMode === undefined ? (
        <Loading />
      ) : gameMode.status === 200 ? (
        <div className="gameMode_content">
          <div>
            {gameMode.data?.listViewIconTall ? (
              <img src={gameMode.data?.listViewIconTall} alt={gameMode.data?.displayName} />
            ) : null}
          </div>
          <div>
            <h2>{gameMode.data?.displayName}</h2>
            <p>{gameMode.data?.description}</p>
          </div>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </Container>
  );
}

GameMode.propTypes = {
   uuid: PropTypes.string.isRequired,
};

export default GameMode;

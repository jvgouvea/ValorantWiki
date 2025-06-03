import React from 'react';
import { useParams } from 'react-router-dom';
import GameMode from '../components/GameMode';

function GameModeDetail() {
  const { uuid } = useParams();

  return (
    <GameMode uuid={uuid}/>
  );
}

export default GameModeDetail;

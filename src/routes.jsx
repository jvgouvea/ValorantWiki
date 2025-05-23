import React, { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import { ValorantApiContext } from './context/ValorantApi';

import Loading from './components/Loading';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentDetail from './pages/AgentDetail';
import GameModes from './pages/GameModes';

const Rotas = () => {
  const { loading } = useContext(ValorantApiContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agentes" element={<Agents />} />
      <Route path="/agente/:name/:uuid" element={<AgentDetail />} />
      <Route path="/modos-de-jogo" element={<GameModes />} />
    </Routes>
  );
};

export default Rotas;

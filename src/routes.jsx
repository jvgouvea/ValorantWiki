import React, { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import { ValorantApiContext } from './context/ValorantApi';

import Loading from './components/Loading';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentDetail from './pages/AgentDetail';
import GameModes from './pages/GameModes';
import GameModeDetail from './pages/GameModeDetail';
import Maps from './pages/Maps';
import MapDetail from './pages/MapDetail';
import CompetitiveTiers from './pages/CompetitiveTiers';

const Rotas = () => {
  const { loading } = useContext(ValorantApiContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agentes" element={<Agents />} />
      <Route path="/mapas" element={<Maps />} />
      <Route path="/modos-de-jogo" element={<GameModes />} />
      <Route path="/Ranques" element={<CompetitiveTiers />} />
      <Route path="/agente/:name/:uuid" element={<AgentDetail />} />
      <Route path="/modos-de-jogo/:name/:uuid" element={<GameModeDetail />} />
      <Route path="/mapa/:name/:uuid" element={<MapDetail />} />
    </Routes>
  );
};

export default Rotas;

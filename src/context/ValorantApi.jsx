// ValorantContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  fetchAgents,
  fetchMaps,
  fetchCompetitiveTiers,
  fetchGameModes,
} from '../Api';

const ValorantApiContext = createContext();

const ValorantApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [languageApi, setLanguageApi] = useState('pt-BR'); // idioma na API
  const [uuid, setUuid] = useState(); // ID do agente ativo
  const [agents, setAgents] = useState();
  const [maps, setMaps] = useState([]);
  const [competitiveTiers, setCompetitiveTiers] = useState([]);
  const [gameModes, setGameModes] = useState([]);

  useEffect(() => {
    // chamadas a API atualizando os estados
    const fetchData = async () => {
      try {
        const agentsData = await fetchAgents(languageApi);
        const mapsData = await fetchMaps(languageApi);
        const competitiveTiersData = await fetchCompetitiveTiers(languageApi);
        const gameModesData = await fetchGameModes(languageApi);

        setAgents(agentsData);
        setMaps(mapsData);
        setCompetitiveTiers(competitiveTiersData);
        setGameModes(gameModesData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [languageApi]);

  return (
    <ValorantApiContext.Provider
      value={{
        loading,
        setLoading,
        languageApi,
        setLanguageApi,
        agents,
        maps,
        competitiveTiers,
        gameModes,
      }}
    >
      {children}
    </ValorantApiContext.Provider>
  );
};

export { ValorantApiContext, ValorantApiProvider };

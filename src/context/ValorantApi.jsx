// ValorantContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  fetchAgents,
  fetchAgentDetails,
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
  const [agentDetails, setAgentDetails] = useState();
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

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const agentDetailsData = await fetchAgentDetails(uuid, languageApi);

          setAgentDetails(agentDetailsData);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [languageApi, uuid]);

  return (
    <ValorantApiContext.Provider
      value={{
        loading,
        setLoading,
        languageApi,
        setLanguageApi,
        uuid,
        setUuid,
        agents,
        agentDetails,
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

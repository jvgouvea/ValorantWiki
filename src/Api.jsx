const baseUrl = 'https://valorant-api.com/v1';

const fetchAgents = async (language) => {
  try {
    const response = await fetch(
      `${baseUrl}/agents?isPlayableCharacter=true&language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agents:', error);
    throw error;
  }
};

const fetchMaps = async (language) => {
  try {
    const response = await fetch(
      `${baseUrl}/maps?language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching maps:', error);
    throw error;
  }
};

const fetchCompetitiveTiers = async (language) => {
  try {
    const response = await fetch(
      `${baseUrl}/competitivetiers?language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching competitive tiers:', error);
    throw error;
  }
};

const fetchGameModes = async (language) => {
  try {
    const response = await fetch(
      `${baseUrl}/gamemodes?language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game modes:', error);
    throw error;
  }
};

const fetchAgentDetails = async (agentUuid, language) => {
  try {
    const response = await fetch(
      `${baseUrl}/agents/${agentUuid}?language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agent details:', error);
    throw error;
  }
};

const fetchGameModeDetails = async (gamemodeUuid, language) => {
  try {
    const response = await fetch(
      `${baseUrl}/gamemodes/${gamemodeUuid}?language=${language}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game modes:', error);
    throw error;
  }
};

export { fetchAgents, fetchMaps, fetchCompetitiveTiers, fetchGameModes, fetchAgentDetails, fetchGameModeDetails };

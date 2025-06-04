import React, { useContext } from 'react';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ServiceUnavailable from '../components/ServiceUnavailable';

const CompetitiveTiersList = () => {
  const { competitiveTiers } = useContext(ValorantApiContext);

  if (competitiveTiers.status !== 200) {
    return (
      <Container>
        <ServiceUnavailable />
      </Container>
    );
  }

  const groupedRanks = competitiveTiers.data?.[4]?.tiers.reduce((acc, rank) => {
    if (rank.division === "ECompetitiveDivision::INVALID") return acc;

    const division = rank.divisionName;
    if (!acc[division]) acc[division] = [];
    acc[division].push(rank);
    return acc;
  }, {});

  return (
    <Container>
      <Title text="RANQUES" margin="70px 0 40px" tag="h2" color="primary-black" />
      <div className="competitiveTiers-list_content">
        {Object.entries(groupedRanks).map(([divisionName, ranks]) => (
          <div key={divisionName}>
            <ul>
              {ranks.map((rank, index) => (
                <li key={index}>
                  <img src={rank.largeIcon} alt={rank.divisionName} />
                  <span>{rank.tierName}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CompetitiveTiersList;

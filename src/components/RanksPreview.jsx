import React, { useContext } from 'react';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ButtonSeeMore from '../components/ButtonSeeMore';
import UnavailableService from '../components/UnavailableService';

const RanksPreview = () => {
  const { competitiveTiers } = useContext(ValorantApiContext);
  const lastItem = competitiveTiers.data.slice(-1);

  return (
    <div className="ranks-preview_container">
      <Container>
        <Title text="RANQUES" margin="0 0 40px" tag="h2" color="white" />
        {competitiveTiers.status === 200 ? (
          <div className="ranks-preview_content">
            <ul className="ranks-preview_list">
              {lastItem[0].tiers
                .filter((rank) => [20, 23, 26, 27].includes(rank.tier))
                .map((rank) => (
                  <li key={rank.uuid}>
                    <img src={rank.largeIcon} alt={rank.divisionName} />
                    <h4>{rank.divisionName}</h4>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <UnavailableService />
        )}
        <ButtonSeeMore
          text="Ver todos os ranques"
          link="ranques"
          type="white"
          margin="50px 0 0"
        />
      </Container>
    </div>
  );
};

export default RanksPreview;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ButtonSeeMore from '../components/ButtonSeeMore';
import ServiceUnavailable from '../components/ServiceUnavailable';

const MapsPreview = () => {
  const { maps } = useContext(ValorantApiContext);
  const firstFourMaps = maps.data.slice(0, 4);

  console.log(firstFourMaps.data);

  return (
    <Container>
      <Title text="MAPAS" margin="0 0 40px" tag="h2" color="primary-black" />
      {maps.status === 200 ? (
        <div className="maps-preview_content">
          <ul className="maps-preview_list">
            {firstFourMaps.map((map) => (
              <li key={map.uuid}>
                <Link to={`mapas/${map.uuid}`}>
                  <img src={map.splash} alt={map.displayName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
      <ButtonSeeMore
        text="Ver todos os mapas"
        link="mapas"
        type="red"
        margin="50px 0 0"
      />
    </Container>
  );
};

export default MapsPreview;

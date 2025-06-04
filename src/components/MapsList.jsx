import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import ServiceUnavailable from '../components/ServiceUnavailable';

const MapsList = () => {
  const { maps } = useContext(ValorantApiContext);

  return (
    <Container>
      <Title text="MAPAS" margin="70px 0 40px" tag="h2" color="primary-black" />
      {maps.status === 200 ? (
        <div className="maps-list_content">
          <ul>
            {maps.data?.map((map) => (
              <li key={map.uuid}>
                <Link to={`/mapa/${map.displayName}/${map.uuid}`}>
                  <span>{map.displayName}</span>
                  <img src={map.splash} alt={map.displayName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </Container>
  );
};

export default MapsList;

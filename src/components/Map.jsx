

import React, { useEffect, useState, useContext } from 'react';
import Container from '../components/Container';
import PropTypes from 'prop-types';

import { fetchMapDetails } from '../Api';
import { ValorantApiContext } from '../context/ValorantApi';

import Loading from '../components/Loading';
import ServiceUnavailable from '../components/ServiceUnavailable';

function Map({ uuid }) {
  const [map, setMap] = useState();
  const { languageApi } = useContext(ValorantApiContext);

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const mapData = await fetchMapDetails(uuid, languageApi);

          setMap(mapData);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageApi, uuid]);

  return (
    <Container>
      {map === undefined ? (
        <Loading />
      ) : map.status === 200 ? (
        <div className="map_content">
            <h2>{map.data?.displayName}</h2>
            <img className="map_content__splash" src={map.data?.splash} alt={map.data?.displayName} />
            <img className="map_content__minimap" src={map.data?.displayIcon} alt={map.data?.displayName} />
        </div>
      ) : (
        <ServiceUnavailable />
      )}
    </Container>
  );
}

Map.propTypes = {
   uuid: PropTypes.string.isRequired,
};

export default Map;

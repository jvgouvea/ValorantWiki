import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';

function MapDetail() {
  const { uuid } = useParams();

  return (
    <Map uuid={uuid}/>
  );
}

export default MapDetail;


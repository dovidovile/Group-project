import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1320px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDeP5Yh6nnvoETRaZVUI0Tx0EEAMMDgLuw',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);

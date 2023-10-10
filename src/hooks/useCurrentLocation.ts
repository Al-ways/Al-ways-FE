import { useState, useEffect } from 'react';

export const useCurrentLocation = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setLat(lat);
      setLon(lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return { lat, lon };
};

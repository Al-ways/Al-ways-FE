import { useState, useEffect } from 'react';

export const useCurrentLocation = () => {
  const [coords, setCoords] = useState<CoordsData | null>(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setCoords({ lat, lon });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { coords };
};

import { useState, useEffect } from 'react';

export default function useCurrentLocation() {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [location]);

  return location;
}

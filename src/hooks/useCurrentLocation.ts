import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] =
    useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (position: GeolocationPosition) => {
    setCurrentLocation(position);
  };

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return { currentLocation, error };
};

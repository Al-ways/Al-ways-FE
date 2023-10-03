import MainTemplate from '../components/template/MainTemplate';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const Main = () => {
  const { currentLocation, error } = useCurrentLocation();
  console.log(currentLocation, error);

  return <MainTemplate />;
};

export default Main;

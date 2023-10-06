import SearchOrganism from '../organism/SearchOrganism';
import SliderMolecule from '../molecule/SliderMolecule';
import WeatherOrganism from '../organism/WeatherOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';

const MainTemplate = () => {
  return (
    <>
      <SliderMolecule />
      <SearchOrganism />
      <WeatherOrganism />
      <PopularLocationOrganism />
      <CommunityOrganism />
    </>
  );
};

export default MainTemplate;

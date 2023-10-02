import SearchOrganism from '../organism/SearchOrganism';
import SliderMolecule from '../molecule/SliderMolecule';
import RecommendedOrganism from '../organism/RecommendedOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';

const MainTemplate = () => {
  return (
    <>
      <SliderMolecule />
      <SearchOrganism />
      <RecommendedOrganism />
      <PopularLocationOrganism />
      <CommunityOrganism />
    </>
  );
};

export default MainTemplate;

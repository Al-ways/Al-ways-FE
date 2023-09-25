import bannerImage1 from '../../assets/main/banner1.png';
import bannerImage2 from '../../assets/main/banner2.png';
import bannerImage3 from '../../assets/main/banner3.png';
import SearchOrganism from '../organism/SearchOrganism';
import RecommendedOrganism from '../organism/RecommendedOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';
import SliderMolecule from '../molecule/SliderMolecule';

const MainTemplate = () => {
  /* 배너 이미지 */
  const BannerImages = [bannerImage1, bannerImage2, bannerImage3];
  return (
    <>
      <SliderMolecule BannerImages={BannerImages} dotState={true} time={3} />
      <SearchOrganism />
      <RecommendedOrganism />
      <PopularLocationOrganism />
      <CommunityOrganism />
    </>
  );
};

export default MainTemplate;

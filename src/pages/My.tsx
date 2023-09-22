import BreakLineImage from '../components/atom/BreakLineImage';
import CommunityOrganism from '../components/organism/CommunityOrganism';
import MyBookmarkedOrganism from '../components/organism/MyBookmarkedOrganism';
import ProfileOrganism from '../components/organism/ProfileOrganism';
import ThumbnailContainerOrganism from '../components/organism/ThumbnailContainerOrganism';

const My = () => {
  return (
    <>
      <ProfileOrganism />
      <BreakLineImage />
      <MyBookmarkedOrganism />
      {/* Title, Location, 전체 보기 */}
      {/* <ThumbnailContainerOrganism /> */}
      {/* <CommunityOrganism /> */}
    </>
  );
};

export default My;

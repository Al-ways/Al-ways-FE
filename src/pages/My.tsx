import BreakLineImage from '../components/atom/BreakLineImage';
import MyBookmarkedOrganism from '../components/organism/MyBookmarkedOrganism';
import MyPostOrganism from '../components/organism/MyPostOrganism';
import ProfileOrganism from '../components/organism/ProfileOrganism';

const My = () => {
  return (
    <>
      <ProfileOrganism />
      <BreakLineImage />
      <MyBookmarkedOrganism />
      <MyPostOrganism />
    </>
  );
};

export default My;

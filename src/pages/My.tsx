import BreakLineImage from '../components/atom/BreakLineImage';
import MyBookmarkOrganism from '../components/organism/MyBookmarkOrganism';
import MyCommentOrganism from '../components/organism/MyCommentOrganism';
import MyPostOrganism from '../components/organism/MyPostOrganism';
import ProfileOrganism from '../components/organism/ProfileOrganism';

const My = () => {
  return (
    <>
      <ProfileOrganism />
      <BreakLineImage />
      <MyBookmarkOrganism />
      <MyPostOrganism />
      <MyCommentOrganism />
    </>
  );
};

export default My;

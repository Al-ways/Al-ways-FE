import BreakLineImage from '../atom/BreakLineImage';
import MyBookmarkOrganism from '../organism/MyBookmarkOrganism';
import MyCommentOrganism from '../organism/MyCommentOrganism';
import MyPostOrganism from '../organism/MyPostOrganism';
import ProfileOrganism from '../organism/ProfileOrganism';

const MyTemplate = () => {
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

export default MyTemplate;

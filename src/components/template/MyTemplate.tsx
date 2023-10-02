import BreakLine from '../atom/BreakLine';
import MyBookmarkOrganism from '../organism/MyBookmarkOrganism';
import MyCommentOrganism from '../organism/MyCommentOrganism';
import MyPostOrganism from '../organism/MyPostOrganism';
import ProfileOrganism from '../organism/ProfileOrganism';

const MyTemplate = () => {
  return (
    <>
      <ProfileOrganism />
      <BreakLine width={'480'} height={'10'} mb={'30'} />
      <MyBookmarkOrganism />
      <MyPostOrganism />
      <MyCommentOrganism />
    </>
  );
};

export default MyTemplate;

import styled from '@emotion/styled';
import BreakLineImage from '../atom/BreakLineImage';
import MyBookmarkOrganism from '../organism/MyBookmarkOrganism';
import MyCommentOrganism from '../organism/MyCommentOrganism';
import MyPostOrganism from '../organism/MyPostOrganism';
import ProfileOrganism from '../organism/ProfileOrganism';

const MyTemplate = () => {
  return (
    <Container>
      <ProfileOrganism />
      <BreakLineImage width={'480'} height={'10'} mb={'30'} />
      <MyBookmarkOrganism />
      <MyPostOrganism />
      <MyCommentOrganism />
    </Container>
  );
};

export default MyTemplate;

const Container = styled.div``;

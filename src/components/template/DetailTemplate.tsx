import styled from '@emotion/styled';
import BreakLineImage from '../atom/BreakLineImage';
import BarDetailOrganism from '../organism/BarDetailOrganism';
import CommentOrganism from '../organism/CommentOrganism';

const DetailTemplate = () => {
  return (
    <Container>
      <BarDetailOrganism />
      <BreakLineImage width={'480'} height={'10'} mb={'30'} />
      <CommentOrganism />
    </Container>
  );
};

export default DetailTemplate;

const Container = styled.div``;

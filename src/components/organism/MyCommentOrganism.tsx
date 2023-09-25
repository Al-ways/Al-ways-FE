import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import CommentMolecule from '../molecule/CommentMolecule';

const MyCommentOrganism = () => {
  return (
    <Container>
      <Text
        width={'440'}
        height={'24'}
        fonts={'24'}
        mb={'20'}
        display={'flex'}
        txt={'nickname 님이 작성한 댓글'}
      />
      <Text
        height={'12'}
        fonts={'12'}
        top={'10'}
        right={'20'}
        position={'absolute'}
        cursor={'pointer'}
        color={COLORS.gray}
        txt={'전체보기'}
      />
      <CommentMolecule />
      <CommentMolecule />
      <CommentMolecule />
    </Container>
  );
};

export default MyCommentOrganism;

const Container = styled.div`
  width: 480px;
  margin-bottom: 30px;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

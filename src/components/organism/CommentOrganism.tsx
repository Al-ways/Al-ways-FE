import styled from '@emotion/styled';
import CommentMolecule from '../molecule/CommentMolecule';
import Text from '../atom/Text';

const CommentOrganism = () => {
  return (
    <Container>
      <Text
        width={'440'}
        height={'24'}
        fonts={'24'}
        mb={'20'}
        txt={'n개의 댓글'}
      />
      <CommentMolecule />
      <CommentMolecule />
      <CommentMolecule />
    </Container>
  );
};

export default CommentOrganism;

const Container = styled.div`
  width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

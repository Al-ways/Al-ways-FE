import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import defulatImage from '../../assets/icons/default-image.png';
import Text from '../atom/Text';
import Img from '../atom/Img';

const CommentMolecule = () => {
  return (
    <CommentContainer>
      <CommentTop>
        <Img
          src={defulatImage}
          alt={'profile-image'}
          width={'40'}
          height={'40'}
          mr={'10'}
        />
        <Text
          width={'150'}
          height={'40'}
          mr={'70'}
          fonts={'19'}
          txt={'닉네임'}
        />
        <Text
          width={'130'}
          height={'40'}
          fonts={'18'}
          align={'right'}
          txt={'⭐⭐⭐⭐⭐'}
        />
      </CommentTop>
      <CommentBottom>
        <Text width={'350'} height={'44'} fonts={'18'} txt={'comment'} />
        <Text
          width={'350'}
          height={'16'}
          fonts={'16'}
          color={COLORS.gray}
          txt={'23. 09. 23'}
        />
      </CommentBottom>
    </CommentContainer>
  );
};

export default CommentMolecule;

const CommentContainer = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
  /* gap: 20px; */

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.dark_gray};
`;

const CommentTop = styled.div`
  width: 400px;
  height: 40px;
  margin-bottom: 10px;

  display: flex;
`;
const CommentBottom = styled.div`
  width: 400px;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

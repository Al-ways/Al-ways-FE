import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import NodataMolecule from '../molecule/NodataMolecule';
import { useNavigate } from 'react-router-dom';

const CommunityOrganism = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Text
        width={'440'}
        height={'20'}
        fonts={'20'}
        mb={'20'}
        fontw={'700'}
        display={'flex'}
        txt={'커뮤니티'}
      />
      <Text
        height={'12'}
        fonts={'12'}
        top={'8'}
        right={'20'}
        fontw={'400'}
        position={'absolute'}
        cursor={'pointer'}
        color={COLORS.light_gray}
        txt={'전체보기'}
        onClick={() => {
          navigate('/community');
        }}
      />
      <NodataMolecule mb={'20'} txt={'현재 커뮤니티에 게시된 글이 없습니다.'} />
    </Container>
  );
};

export default CommunityOrganism;

const Container = styled.div`
  width: 480px;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

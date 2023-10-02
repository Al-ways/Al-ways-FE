import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import CommunityThumbnailMolecule from '../molecule/CommunityThumbnailMolecule';

const CommunityOrganism = () => {
  return (
    <Container>
      <Text
        width={'440'}
        height={'24'}
        fonts={'24'}
        mb={'20'}
        display={'flex'}
        txt={'커뮤니티'}
      />
      <Text
        height={'12'}
        fonts={'12'}
        top={'10'}
        right={'20'}
        position={'absolute'}
        cursor={'pointer'}
        color={COLORS.light_gray}
        txt={'전체보기'}
      />
      <CommunityThumbnailMolecule />
      <CommunityThumbnailMolecule />
      <CommunityThumbnailMolecule />
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

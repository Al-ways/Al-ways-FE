import styled from '@emotion/styled';
import InformationMolecule from '../molecule/InformationMolecule';
import Text from '../atom/Text';
import Img from '../atom/Img';
import BarImage from '../../assets/main/bar/bar1.jpg';

const BarDetailOrganism = () => {
  return (
    <Container>
      <TitleContainer>
        <Text width={'315'} height={'24'} fonts={'24'} txt={'Bar name'} />
        <Text
          width={'125'}
          height={'24'}
          fonts={'18'}
          align={'right'}
          txt={'⭐⭐⭐⭐⭐'}
        />
      </TitleContainer>

      <Img
        src={BarImage}
        alt={'Bar image'}
        width={'440'}
        height={'350'}
        br={'10'}
        mb={'20'}
      />
      <InformationMolecule />
    </Container>
  );
};

export default BarDetailOrganism;

const Container = styled.div`
  width: 480px;
  height: 564px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 440px;
  height: 24px;
  margin-bottom: 20px;

  display: flex;
`;

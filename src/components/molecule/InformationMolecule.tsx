import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';
import Img from '../atom/Img';
import locationImage from '../../assets/icons/location.png';
import timeImage from '../../assets/icons/time.png';
import phoneImage from '../../assets/icons/phone.png';

const InformationMolecule = () => {
  return (
    <InformationContainer>
      <ParagraphContainer>
        <TextContainer>
          <Img
            src={locationImage}
            alt={'location'}
            width={'30'}
            height={'30'}
          />
          <Text width={'375'} height={'30'} fonts={'20'} txt={'위치'} />
        </TextContainer>
        <TextContainer>
          <Img src={timeImage} alt={'location'} width={'30'} height={'30'} />
          <Text width={'375'} height={'30'} fonts={'20'} txt={'영업시간'} />
        </TextContainer>
        <TextContainer>
          <Img src={phoneImage} alt={'location'} width={'30'} height={'30'} />
          <Text width={'375'} height={'30'} fonts={'20'} txt={'연락처'} />
        </TextContainer>
      </ParagraphContainer>
    </InformationContainer>
  );
};

{
  /* <Text width={'400'} height={'30'} fonts={'20'} txt={'영업시간'} /> */
}
{
  /* <Text width={'400'} height={'30'} fonts={'20'} txt={'연락처'} /> */
}
export default InformationMolecule;

const InformationContainer = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.dark_gray};
`;

const ParagraphContainer = styled.div`
  width: 400px;
  height: 110px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextContainer = styled.div`
  width: 400px;
  height: 30px;
  gap: 5px;
  display: flex;
`;

import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';
import Img from '../atom/Img';
import alcholImage from '../../assets/main/alchol.png';

const ThumbnailMolecule = () => {
  return (
    <ThumbnailWrapper>
      <ThumbnailTop>
        <Text
          width={'100'}
          height={'20'}
          fonts={'16'}
          br={'10'}
          display={'flex'}
          ai={'center'}
          jc={'center'}
          txt={'맛집추천'}
        />
      </ThumbnailTop>
      <ThumbnailBottom>
        <Img src={alcholImage} width={'100'} height={'80'} />
        <TextWrapper>
          <Text
            width={'250'}
            height={'20'}
            fonts={'20'}
            mt={'20'}
            align={'center'}
            txt={'강남 가볼만 한 곳~'}
          />
          <Text
            width={'150'}
            height={'12'}
            fonts={'12'}
            mt={'4'}
            right={'0'}
            bottom={'0'}
            position={'absolute'}
            align={'right'}
          />
        </TextWrapper>
      </ThumbnailBottom>
    </ThumbnailWrapper>
  );
};

export default ThumbnailMolecule;

const ThumbnailWrapper = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.navy};

  &:only-child {
    margin-bottom: 0;
  }
`;
const ThumbnailTop = styled.div`
  width: 400px;
  height: 20px;
  margin-top: 20px;
`;
const ThumbnailBottom = styled.div`
  width: 400px;
  height: 80px;
  bottom: 20px;

  position: absolute;
  display: flex;
`;
const TextWrapper = styled.div`
  width: 300px;
  height: 80px;

  position: relative;
  display: flex;
  justify-content: center;
`;

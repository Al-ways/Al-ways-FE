import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';
import Img from '../atom/Img';
import barImage1 from '../../assets/main/bar/bar1.jpg';
import barImage2 from '../../assets/main/bar/bar2.jpg';
import barImage3 from '../../assets/main/bar/bar3.png';

const ThumbnailMolecule = () => {
  const BarImages = [barImage1, barImage2, barImage3];
  return (
    // <ThumbnailContainer>
    //   <Img src={barImage1} alt={'thumbnail'} width={'110'} height={'110'} />
    //   <InformationBox>
    //     <TextBox>
    //       <Text
    //         width={'75'}
    //         height={'20'}
    //         bc={COLORS.night}
    //         align={'center'}
    //         br={'10'}
    //         mr={'10'}
    //         txt={'카테고리'}
    //       />
    //       <Text
    //         width={'75'}
    //         height={'20'}
    //         bc={COLORS.violet}
    //         align={'center'}
    //         br={'10'}
    //         mr={'10'}
    //         txt={'태그'}
    //       />
    //       <Text
    //         width={'100'}
    //         height={'20'}
    //         fonts={'14'}
    //         align={'center'}
    //         txt={'⭐⭐⭐⭐⭐'}
    //       />
    //     </TextBox>
    //     <Text width={'260'} height={'45'} fonts={'20'} ml={'10'} txt={'bar'} />
    //     <Text width={'250'} height={'45'} ml={'10'} mr={'10'} txt={'address'} />
    //   </InformationBox>
    // </ThumbnailContainer>
    <>
      {BarImages.map((image, index) => (
        <ThumbnailContainer key={index}>
          <Img
            src={image}
            alt={`thumbnail${index + 1}`}
            width={'110'}
            height={'110'}
            br={'10'}
          />
          <InformationBox>
            <TextBox>
              <Text
                width={'75'}
                height={'20'}
                bgc={COLORS.night}
                align={'center'}
                br={'10'}
                mr={'10'}
                txt={'카테고리'}
              />
              <Text
                width={'75'}
                height={'20'}
                bgc={COLORS.violet}
                align={'center'}
                br={'10'}
                mr={'10'}
                txt={'태그'}
              />
              <Text
                width={'100'}
                height={'20'}
                fonts={'14'}
                align={'right'}
                txt={'⭐⭐⭐⭐⭐'}
              />
            </TextBox>
            <Text
              width={'260'}
              height={'45'}
              fonts={'20'}
              ml={'10'}
              txt={`bar${index + 1}`}
            />
            <Text
              width={'250'}
              height={'45'}
              ml={'10'}
              mr={'10'}
              txt={`address${index + 1}`}
            />
          </InformationBox>
        </ThumbnailContainer>
      ))}
    </>
  );
};

export default ThumbnailMolecule;

const ThumbnailContainer = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
  gap: 20px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.dark_gray};
`;

const InformationBox = styled.div`
  width: 270px;
  height: 110px;
`;
const TextBox = styled.div`
  width: 270px;
  height: 20px;

  display: flex;
`;

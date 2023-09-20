import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import barImage1 from '../../assets/main/bar1.jpg';
import barImage2 from '../../assets/main/bar2.jpg';
import barImage3 from '../../assets/main/bar3.png';
import barImage4 from '../../assets/main/bar4.jpg';
import barImage5 from '../../assets/main/bar5.jpg';
import Img from '../atom/Img';
import Text from '../atom/Text';

const ThumbnailMolecule = () => {
  /* 바 이미지 */
  const BarImages = [barImage1, barImage2, barImage3, barImage4, barImage5];

  return (
    <>
      {/* <ThumbNailContainer>
        <Img
          src={barImage1}
          alt={'bar'}
          width={'210'}
          height={'180'}
          mt={'20'}
          br={'10'}
        />
        <Text
          width={'210'}
          height={'24'}
          fonts={'24'}
          mt={'20'}
          txt={'비어테라스'}
        />
        <Text
          width={'210'}
          height={'16'}
          fonts={'16'}
          mt={'5'}
          txt={'서울특별시 강남구 테헤란로8길 20 1층'}
        />
      </ThumbNailContainer> */}
      {BarImages.map((src, index) => (
        <ThumbNailContainer key={index}>
          <Img
            src={src}
            alt={'bar'}
            width={'210'}
            height={'180'}
            mt={'20'}
            br={'10'}
          />
          <Text
            width={'210'}
            height={'24'}
            fonts={'24'}
            mt={'20'}
            txt={`Bar ${index + 1}`}
          />
          <Text
            width={'210'}
            height={'16'}
            fonts={'16'}
            mt={'5'}
            txt={`address ${index + 1}`}
          />
        </ThumbNailContainer>
      ))}
    </>
  );
};

export default ThumbnailMolecule;

const ThumbNailContainer = styled.div`
  width: 250px;
  height: 300px;
  margin-right: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  background-color: ${COLORS.dark_gray};

  &:last-child {
    margin-right: 0;
  }
`;

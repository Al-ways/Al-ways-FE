import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DotBar from '../atom/DotBar';
import bannerImage1 from '../../assets/main/banner1.png';
import bannerImage2 from '../../assets/main/banner2.png';
import bannerImage3 from '../../assets/main/banner3.png';

const SliderMolecule = () => {
  // 배너 이미지
  const BannerImages = [bannerImage1, bannerImage2, bannerImage3];

  // 현재 보여지고 있는 이미지(인덱스), 초기값 0: 첫 번째 이미지
  const [ImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // setInterval 함수로 3초마다 실행되는 타이머 생성
    const timer = setInterval(() => {
      // 현재 이미지 인덱스 + 1 -> 다음 이미지로 이동
      setImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % BannerImages.length,
      );
    }, 4000);

    // clearInterval 함수로 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, [BannerImages]);

  const handleClickDot = (index: number) => {
    setImageIndex(index);
  };

  return (
    <Slider>
      <Banner image={BannerImages[ImageIndex]} />
      <DotBar
        BannerImages={BannerImages}
        activeDot={ImageIndex}
        onClickDot={handleClickDot}
      />
    </Slider>
  );
};

export default SliderMolecule;

const Slider = styled.div`
  width: 480px;
  height: 320px;
  margin-bottom: 30px;

  position: relative;
`;

const Banner = styled.div<{ image: string }>`
  width: 480px;
  height: 320px;

  cursor: pointer;
  background-image: url(${(props) => props.image});
`;

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DotBar from '../atom/DotBar';

interface SliderMoleculeProps {
  BannerImages: Array<string>;
  dotState: boolean;
  time: number;
}
interface BannerProp {
  image: string;
}

const SliderMolecule = ({
  BannerImages,
  dotState,
  time,
}: SliderMoleculeProps) => {
  // 현재 보여지고 있는 이미지(인덱스), 초기값 0: 첫 번째 이미지
  const [ImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // setInterval 함수로 3초마다 실행되는 타이머 생성
    const timer = setInterval(() => {
      // 현재 이미지 인덱스 + 1 -> 다음 이미지로 이동
      setImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % BannerImages.length,
      );
    }, time * 1000);

    // clearInterval 함수로 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, [BannerImages]);

  const handleClickDot = (index: number) => {
    setImageIndex(index);
  };

  return (
    <Slider>
      <Banner image={BannerImages[ImageIndex]} />
      {dotState && (
        <DotBar
          BannerImages={BannerImages}
          activeDot={ImageIndex}
          onClickDot={handleClickDot}
        />
      )}
    </Slider>
  );
};

export default SliderMolecule;

const Slider = styled.div`
  width: 480px;
  height: 350px;
  margin-bottom: 30px;

  position: relative;
`;
const Banner = styled.div<BannerProp>`
  width: 480px;
  height: 350px;

  cursor: pointer;
  background-image: url(${(props) => props.image});
`;

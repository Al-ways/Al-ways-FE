import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DotBar from '../atom/DotBar';
import bannerImage1 from '../../assets/main/banner1.png';
import bannerImage2 from '../../assets/main/banner2.png';
import bannerImage3 from '../../assets/main/banner3.png';
import { useNavigate } from 'react-router-dom';

interface BannersWrapperProps {
  length: number;
  BannerIndex: number;
}

interface BannerProp {
  image: string;
}

const SliderMolecule = () => {
  const navigate = useNavigate();

  // 현재 보여지고 있는 배너(인덱스), 초기값 0 : 첫 번째 배너
  const [BannerIndex, setBannerIndex] = useState(0);

  // 각 배너 정보
  const Banners = [
    { image: bannerImage1, route: '/community' },
    { image: bannerImage2, route: '/map' },
    { image: bannerImage3, route: '/recommended' },
  ];

  // 슬라이더 내 각 dot 클릭시 dot의 index와 일치하는 배너 이미지로 이동
  const handleDotClick = (index: number) => {
    setBannerIndex(index);
  };

  // 슬라이더 내 각 배너 이미지 클릭시 일치하는 route로 이동
  const handleBannerClick = () => {
    navigate(Banners[BannerIndex].route);
  };

  useEffect(() => {
    // setInterval 함수로 3.5초마다 실행되는 타이머 생성
    const timer = setInterval(() => {
      // 현재 배너 인덱스 +1 -> 다음 배너로 이동
      setBannerIndex(
        (currentBannerIndex) => (currentBannerIndex + 1) % Banners.length,
      );
    }, 3500);

    // clearInterval 함수로 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, []);

  return (
    <Slider>
      <BannersWrapper length={Banners.length} BannerIndex={BannerIndex}>
        {Banners.map((banner, index) => (
          <Banner
            key={index}
            image={banner.image}
            onClick={handleBannerClick}
          />
        ))}
      </BannersWrapper>
      <DotBar
        BannerImages={Banners.map((banner) => banner.image)}
        activeDot={BannerIndex}
        onClickDot={handleDotClick}
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

const BannersWrapper = styled.div<BannersWrapperProps>`
  width: ${(props) => props.length * 480}px;

  display: flex;
  transition: transform 1s;
  transform: translateX(-${(props) => props.BannerIndex * 480}px);
`;

const Banner = styled.div<BannerProp>`
  width: 480px;
  height: 320px;

  cursor: pointer;
  background-image: url(${(props) => props.image});
`;

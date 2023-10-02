import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DotBar from '../atom/DotBar';
import bannerImage1 from '../../assets/main/banner1.png';
import bannerImage2 from '../../assets/main/banner2.png';
import bannerImage3 from '../../assets/main/banner3.png';
import { useNavigate } from 'react-router-dom';

const SliderMolecule = () => {
  const navigate = useNavigate();

  // 배너 정보
  const Banners = [
    { image: bannerImage1, route: '/community' },
    { image: bannerImage2, route: '/map' },
    { image: bannerImage3, route: '/recommended' },
  ];

  // 현재 보여지고 있는 배너(인덱스), 초기값 0 : 첫 번째 배너
  const [BannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    // setInterval 함수로 4초마다 실행되는 타이머 생성
    const timer = setInterval(() => {
      // 현재 배너 인덱스 +1 -> 다음 배너로 이동
      setBannerIndex(
        (currentBannerIndex) => (currentBannerIndex + 1) % Banners.length,
      );
    }, 4000);

    // clearInterval 함수로 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, [Banners]);

  const handleClickDot = (index: number) => {
    setBannerIndex(index);
  };

  const handleBannerClick = () => {
    navigate(Banners[BannerIndex].route);
  };

  return (
    <Slider>
      <Banner image={Banners[BannerIndex].image} onClick={handleBannerClick} />
      <DotBar
        BannerImages={Banners.map((banner) => banner.image)}
        activeDot={BannerIndex}
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

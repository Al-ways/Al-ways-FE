import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import bannerImage1 from '../assets/main/banner1.png';
import bannerImage2 from '../assets/main/banner2.png';
import bannerImage3 from '../assets/main/banner3.png';
import SearchOrganism from '../components/organism/SearchOrganism';
import RecommendedOrganism from '../components/organism/RecommendedOrganism';
import PopularLocationOrganism from '../components/organism/PopularLocationOrganism';
import CommunityOrganism from '../components/organism/CommunityOrganism';

interface BannerProps {
  image: string;
}

const Main = () => {
  /* 배너 이미지 */
  const BannerImages = [bannerImage1, bannerImage2, bannerImage3];

  /* 배너 슬라이더 */
  const Slider = () => {
    // 현재 보여지고 있는 이미지(인덱스), 초기값 0: 첫 번째 이미지
    const [ImageIndex, setImageIndex] = useState(0);

    useEffect(() => {
      // setInterval 함수로 3초마다 실행되는 타이머 생성
      const timer = setInterval(() => {
        // 현재 이미지 인덱스 + 1 -> 다음 이미지로 이동
        setImageIndex((ImageIndex + 1) % BannerImages.length);
      }, 3000);

      // clearInterval 함수로 언마운트 시 타이머 제거
      return () => clearInterval(timer);
    }, [ImageIndex]);

    return <Banner image={BannerImages[ImageIndex]} />;
  };

  return (
    <>
      <Slider />
      <SearchOrganism />
      <RecommendedOrganism />
      <PopularLocationOrganism />
      <CommunityOrganism />
    </>
  );
};

export default Main;

/* 배너 */

const Banner = styled.div<BannerProps>`
  width: 480px;
  height: 350px;
  margin-bottom: 30px;

  cursor: pointer;
  background-image: url(${(props) => props.image});
`;

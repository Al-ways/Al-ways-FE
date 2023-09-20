import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../share/colors';
import bannerImage1 from '../assets/main/banner1.png';
import bannerImage2 from '../assets/main/banner2.png';
import bannerImage3 from '../assets/main/banner3.png';
import defaultImage from '../assets/icons/default-image.png';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SearchOrganism from '../components/organism/SearchOrganism';
import RecommendedOrganism from '../components/organism/RecommendedOrganism';
import PopularOrganism from '../components/organism/PopuarOrganism';
import alcholImage from '../assets/main/alchol.png';

interface BannerProps {
  image: string;
}

interface LargeThumbnailProps {
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

  /* 커뮤니티 이미지 */
  // const CommunityImages = [communityImage, communityImage2, communityImage3];

  return (
    <>
      <HeaderMolecule />
      <Slider />
      <SearchOrganism />
      <RecommendedOrganism />
      <PopularOrganism />
      <CommunityContainer>
        <Title>커뮤니티</Title>
        <ViewAll>전체 보기</ViewAll>
        {/* {CommunityImages.map((image, index) => (
          <ThumbnailDiv key={index}>
            <CommunityImage image={image} />
          </ThumbnailDiv>
        ))} */}
        <CommunityDiv>
          <CommunityTop>
            <CommunityCategory>맛집추천</CommunityCategory>
          </CommunityTop>
          <CommunityBottom>
            <Image />
            <Wrapper>
              <Post>강남 가볼만 한 곳 ~</Post>
              <CommunityView>좋아요 10 | 조회수 100</CommunityView>
            </Wrapper>
          </CommunityBottom>
        </CommunityDiv>
      </CommunityContainer>
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

const Title = styled.div`
  width: 440px;
  height: 24px;
  font-size: 24px;
  margin-bottom: 20px;

  display: flex;
`;

/* 커뮤니티 */
const CommunityContainer = styled.div`
  width: 480px;
  min-height: 224px;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const CommunityImage = styled.div<LargeThumbnailProps>`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;
const CommunityDiv = styled.div`
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
const CommunityTop = styled.div`
  width: 400px;
  height: 20px;
  margin-top: 20px;
`;
const CommunityCategory = styled.div`
  width: 100px;
  height: 20px;
  font-size: 16px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.dark_gray};
`;

const CommunityBottom = styled.div`
  width: 400px;
  height: 80px;
  bottom: 20px;

  position: absolute;
  display: flex;
  /* align-items: center; */
`;

const CommunityUserInfo = styled.div`
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
`;
const UserPhoto = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${defaultImage});
`;
const UserInfo = styled.div`
  width: 100px;
  height: 50px;
`;
const UserNickname = styled.div`
  width: 90px;
  height: 16px;
  font-size: 16px;
  margin: 5px 0 0 10px;
`;
const UpdatedAt = styled.div`
  width: 90px;
  height: 14px;
  font-size: 14px;
  margin: 5px 0 0 10px;

  color: ${COLORS.gray};
`;
const CommunityUserPost = styled.div`
  width: 250px;
  height: 80px;

  position: relative;
  display: flex;
  align-items: center;
`;
const Post = styled.div`
  width: 250px;
  height: 20px;
  font-size: 20px;
  margin-top: 20px;

  text-align: center;
`;

const ViewAll = styled.div`
  height: 12px;
  font-size: 12px;
  top: 10px;
  right: 20px;

  position: absolute;
  cursor: pointer;
  color: ${COLORS.gray};
`;

const Image = styled.div`
  width: 100px;
  height: 80px;

  background-image: url(${alcholImage});
`;

const Wrapper = styled.div`
  width: 300px;
  height: 80px;

  position: relative;
  display: flex;
  justify-content: center;
`;

const CommunityView = styled.div`
  width: 150px;
  height: 12px;
  font-size: 12px;
  margin-top: 4px;
  right: 0;
  bottom: 0;

  position: absolute;
  text-align: right;
`;

const CommunityProfile = styled.div`
  width: 150px;
  height: 14px;
  font-size: 14px;
  margin-top: 4px;
  left: 0;
  bottom: 0;

  position: absolute;
  text-align: left;
`;

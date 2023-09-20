import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../share/colors';
import locationImage from '../assets/icons/location.png';
import bannerImage1 from '../assets/main/banner1.png';
import bannerImage2 from '../assets/main/banner2.png';
import bannerImage3 from '../assets/main/banner3.png';
import rainyImage from '../assets/main/rainy.png';
// import barImage1 from '../assets/main/bar1.png';
import barImage1 from '../assets/main/bar1.jpg';
import barImage2 from '../assets/main/bar2.jpg';
import barImage3 from '../assets/main/bar3.png';
import barImage4 from '../assets/main/bar4.jpg';
import barImage5 from '../assets/main/bar5.jpg';
import defaultImage from '../assets/icons/default-image.png';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SearchOrganism from '../components/organism/SearchOrganism';
import RecommendedOrganism from '../components/organism/RecommendedOrganism';
import PopularHeaderMolecule from '../components/molecule/PopularHeaderMolecule';

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

  /* 바 이미지 */
  const BarImages = [barImage1, barImage2, barImage3, barImage4, barImage5];

  /* 커뮤니티 이미지 */
  // const CommunityImages = [communityImage, communityImage2, communityImage3];

  return (
    <>
      <HeaderMolecule />
      <Slider />
      <SearchOrganism />
      <RecommendedOrganism />
      <PopularContainer>
        <PopularHeaderMolecule />
        <LargeThumbnailWrapper>
          {BarImages.map((image, index) => (
            <LargeThumbnailDiv key={index}>
              <LargeThumbnailImage image={image} />
              <LargeThumbnailTitle>비어테라스</LargeThumbnailTitle>
              <LargeThumbnailText>
                서울특별시 강남구 테헤란로8길 20 1 층
              </LargeThumbnailText>
            </LargeThumbnailDiv>
          ))}
        </LargeThumbnailWrapper>
      </PopularContainer>
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
            <CommunityView>좋아요 10 | 조회수 100</CommunityView>
          </CommunityTop>
          <CommunityBottom>
            <CommunityUserInfo>
              <UserPhoto />
              <UserInfo>
                <UserNickname>익명</UserNickname>
                <UpdatedAt>23. 09. 20</UpdatedAt>
              </UserInfo>
            </CommunityUserInfo>
            <CommunityUserPost>
              {/* post 제목 12자 이상 시 축약 ? 12자 이하로만 ? */}
              <Post>강남 맛집 추천 ~</Post>
            </CommunityUserPost>
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

/* 날씨별 추천 배너 */
const RecommendedContainer = styled.div`
  width: 480px;
  height: 150px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ThumbnailDiv = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.dark_gray};

  &:only-child {
    margin-bottom: 0;
  }
`;
const ThumbnailTitle = styled.div`
  width: 400px;
  height: 50px;
  font-size: 45px;
  margin-top: 20px;
`;
const ThumbnailText = styled.div`
  width: 400px;
  height: 16px;
  font-size: 16px;
  bottom: 20px;

  position: absolute;
`;
const ThumbnailImage = styled.div`
  width: 100px;
  height: 100px;
  top: 25px;
  right: 20px;

  position: absolute;
  background-image: url(${rainyImage});
  background-size: cover;

  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

/* 인기 술집 */
const PopularContainer = styled.div`
  width: 480px;
  height: 380px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleText = styled.div`
  margin-right: 20px;
`;
const Contents = styled.div`
  display: flex;
`;
const ContentsText = styled.div``;
const LocationIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  background-image: url(${locationImage});
`;

const LargeThumbnailWrapper = styled.div`
  width: 440px;
  height: 335px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: scroll;

  /* 스크롤 바 */
  &::-webkit-scrollbar {
    width: 440px;
    height: 15px;
    border-radius: 10px;
    background-color: ${COLORS.dark_gray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.white};
    border-radius: 10px;
  }
`;
const LargeThumbnailDiv = styled.div`
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
const LargeThumbnailImage = styled.div<LargeThumbnailProps>`
  width: 210px;
  height: 180px;
  margin-top: 20px;
  border-radius: 10px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;
const LargeThumbnailTitle = styled.div`
  width: 210px;
  height: 24px;
  font-size: 24px;
  margin-top: 20px;
`;
const LargeThumbnailText = styled.div`
  width: 210px;
  height: 16px;
  font-size: 16px;
  margin-top: 5px;
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
  height: 16px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;
const CommunityCategory = styled.div`
  width: 150px;
  height: 16px;
  font-size: 16px;
`;
const CommunityView = styled.div`
  width: 250px;
  height: 12px;
  font-size: 12px;
  margin-top: 4px;

  text-align: right;
`;
const CommunityBottom = styled.div`
  width: 400px;
  height: 80px;
  bottom: 20px;

  position: absolute;
  display: flex;
`;

const CommunityUserInfo = styled.div`
  width: 150px;
  height: 80px;

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

  display: flex;
  align-items: center;
`;
const Post = styled.div`
  width: 250px;
  height: 20px;
  font-size: 20px;

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

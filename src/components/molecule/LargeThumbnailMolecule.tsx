import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Img from '../atom/Img';
import Text from '../atom/Text';
import { bars } from '../../api/bar';
import { useNavigate } from 'react-router-dom';
import NoDataMolecule from './NoDataMolecule';
import { getStars } from '../../utils/ratingUtil';

const LargeThumbnailMolecule = () => {
  const navigate = useNavigate();

  // 높은 별점 순 5개 업소
  const sortedBars = [...bars].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <>
      {sortedBars && sortedBars.length > 0 ? (
        <LargeThumbnailWrapper>
          {sortedBars.map((bar) => (
            <ThumbNailContainer
              key={bar.id}
              onClick={() => navigate(`/detail/${bar.id}`)}
            >
              <Img
                src={bar.image}
                alt={bar.title}
                width={'250'}
                height={'200'}
                btlr={'10'}
                btrr={'10'}
              />
              <TitleWrapper>
                <Text
                  // width={'105'}
                  height={'16'}
                  fonts={'16'}
                  fontw={'400'}
                  txt={bar.title}
                />
                <Text
                  // width={'105'}
                  height={'16'}
                  fonts={'14'}
                  txt={getStars(bar.rating)}
                />
              </TitleWrapper>

              <Text
                width={'210'}
                height={'14'}
                fonts={'14'}
                mt={'15'}
                txt={bar.location}
              />
            </ThumbNailContainer>
          ))}
        </LargeThumbnailWrapper>
      ) : (

        <NoDataMolecule txt={'이번 주 인기 술집이 없습니다.'} />

      )}
    </>
  );
};

export default LargeThumbnailMolecule;

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
    background-color: ${COLORS.light_gray};
    border-radius: 10px;
  }
`;

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

const TitleWrapper = styled.div`
  width: 210px;
  height: 16px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Img from '../atom/Img';
import Text from '../atom/Text';
import { bars } from '../../api/bar';

const LargeThumbnailMolecule = () => {
  // 높은 별점 순 5개 업소
  const sortedBars = [...bars].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <LargeThumbnailWrapper>
      {sortedBars.map((bar) => (
        <ThumbNailContainer key={bar.id}>
          <Img
            src={bar.image}
            alt={bar.title}
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
            txt={bar.title}
          />
          <Text
            width={'210'}
            height={'16'}
            fonts={'16'}
            mt={'10'}
            txt={bar.location}
          />
        </ThumbNailContainer>
      ))}
    </LargeThumbnailWrapper>
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
    background-color: ${COLORS.white};
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

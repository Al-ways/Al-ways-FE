import styled from '@emotion/styled';
import Text from '../atom/Text';

const RecommendedTItleMolecule = () => {
  return (
    <TitleContainer>
      <Text
        width={'480'}
        height={'24'}
        fonts={'20'}
        align={'center'}
        txt={'오늘 날씨에 따른 추천 리스트입니다. 🔍'}
      />
    </TitleContainer>
  );
};

export default RecommendedTItleMolecule;

const TitleContainer = styled.div`
  width: 480px;
  height: 24px;
  margin: 20px 0 50px;
`;

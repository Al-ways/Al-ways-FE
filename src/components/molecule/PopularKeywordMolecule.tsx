import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';

const PopularKeywordMolecule = () => {
  const words = ['파전', '맥주', '막걸리', '와인', '치킨'];
  return (
    <PolularKeywordContainer>
      {words.map((word, index) => (
        <TextContainer>
          <Text
            key={index}
            width={'25'}
            height={'20'}
            fonts={'20'}
            txt={`${index + 1}.`}
          />
          <Text
            key={index}
            width={'375'}
            height={'20'}
            fonts={'20'}
            cursor={'pointer'}
            txt={`${word}`}
          />
        </TextContainer>
      ))}
    </PolularKeywordContainer>
  );
};

export default PopularKeywordMolecule;

const PolularKeywordContainer = styled.div`
  width: 440px;
  height: 220px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  background-color: ${COLORS.dark_gray};
`;

const TextContainer = styled.div`
  width: 400px;
  height: 20px;
  margin: 20px 0 0 20px;

  display: flex;
`;

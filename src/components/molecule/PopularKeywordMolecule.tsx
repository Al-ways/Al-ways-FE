import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';

const PopularKeywordMolecule = () => {
  const words = ['파전', '맥주', '막걸리', '와인', '치킨'];
  return (
    <PolularKeywordContainer>
      {words.map((word, index) => (
        <TextContainer>
          <Text width={'20'} height={'16'} fonts={'14'} txt={`${index + 1}.`} />
          <Text
            width={'380'}
            height={'16'}
            fonts={'16'}
            fontw={'400'}
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
  height: 200px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  background-color: ${COLORS.dark_gray};
`;

const TextContainer = styled.div`
  width: 400px;
  height: 16px;
  margin-top: 20px;
  margin-left: 20px;
  /* margin: 20px 0 0 20px; */
  /* margin: 0 auto; */

  display: flex;
`;

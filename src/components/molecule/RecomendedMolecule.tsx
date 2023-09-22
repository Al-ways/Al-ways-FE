import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import Weather from '../atom/Weather';

const RecomendedMolecule = () => {
  return (
    <>
      <RecommenedBanner>
        <Text
          width={'400'}
          height={'50'}
          fonts={'45'}
          mt={'20'}
          txt={'비 오는 날엔?'}
        />
        <Text
          width={'400'}
          height={'16'}
          fonts={'16'}
          txt={'강남구, 22°C, 비'}
          bottom={'20'}
          position={'absolute'}
        />
        <Weather />
      </RecommenedBanner>
    </>
  );
};

export default RecomendedMolecule;

const RecommenedBanner = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;
  /* margin-bottom: 20px; */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.dark_gray};
`;

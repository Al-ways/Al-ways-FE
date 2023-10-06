import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import Weather from '../atom/Weather';

const WeatherMolecule = () => {
  return (
    <>
      <WheatherBanner>
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
      </WheatherBanner>
    </>
  );
};

export default WeatherMolecule;

const WheatherBanner = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.dark_gray};
`;

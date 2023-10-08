import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import Weather from '../atom/Weather';

interface WeatherProps {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const WeatherMolecule = ({ weather }: { weather: WeatherProps }) => {
  // console.log(weather);

  // 날씨 번역
  const weatherTranslation: { [key: string]: string } = {
    'sky is clear': '맑음',
    'few clouds': '흐림',
    'scattered clouds': '흐림',
    'broken clouds': '흐림',
    'overcast clouds': '흐림',
    'shower rain': '비',
    'light rain': '비',
    'moderate rain': '비',
    Rain: '비',
    Thunderstorm: '천둥번개',
    snow: '눈',
    mist: '안개',
  };

  // 번역한 날씨명 변수
  const translatedWeather = weatherTranslation[weather.weather[0].description];

  return (
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
        txt={`${weather.name}, ${Math.floor(
          weather.main.temp,
        )}°C, ${translatedWeather}`}
        bottom={'20'}
        position={'absolute'}
      />
      <Weather translatedWeather={translatedWeather} />
    </WheatherBanner>
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

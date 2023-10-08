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

  let weatherTitle;
  switch (translatedWeather) {
    case '맑음':
      weatherTitle = '오늘은 술 마시기 좋은 날!';
      break;
    case '흐림':
      weatherTitle = '흐린 날엔 어디로 가볼까?';
      break;
    case '천둥번개':
      weatherTitle = '이 날씨에 나가시려구요? ';
      break;
    case '안개':
      weatherTitle = `${translatedWeather} 낀 날엔 어디로 가볼까?`;
      break;
    default:
      weatherTitle = `${translatedWeather} 날엔 어디로 가볼까?`;
      break;
  }

  return (
    <WheatherBanner>
      <Text
        width={'400'}
        height={'24'}
        fonts={'24'}
        fontw={'400'}
        mt={'20'}
        txt={weatherTitle}
      />
      <Text
        width={'400'}
        height={'14'}
        fonts={'14'}
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
  height: 110px;
  border-radius: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.dark_gray};
`;

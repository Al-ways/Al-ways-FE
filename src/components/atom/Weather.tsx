import styled from '@emotion/styled';
import sunnyImage from '../../assets/main/weather/weather-sunny.png';
import cloudImage from '../../assets/main/weather/weather-cloud.png';
import mistImage from '../../assets/main/weather/weather-mist.png';
import thunderImage from '../../assets/main/weather/weather-thunder.png';
import rainyImage from '../../assets/main/weather/weather-rainy.png';
import snowImage from '../../assets/main/weather/weather-sunny.png';

interface WeatherProps {
  translatedWeather: string;
}

const Weather = ({ translatedWeather }: WeatherProps) => {
  // 현재 날씨에 따라 변하는 날씨 아이콘
  let weatherImg;
  switch (translatedWeather) {
    case '맑음':
      weatherImg = sunnyImage;
      break;
    case '흐림':
      weatherImg = cloudImage;
      break;
    case '비':
      weatherImg = rainyImage;
      break;
    case '천둥번개':
      weatherImg = thunderImage;
      break;
    case '눈':
      weatherImg = snowImage;
      break;
    case '안개':
      weatherImg = mistImage;
      break;
    default:
      weatherImg = sunnyImage;
      break;
  }

  return <Image weatherImg={weatherImg} />;
};

export default Weather;

const Image = styled.div<{ weatherImg: string }>`
  width: 70px;
  height: 70px;
  top: 20px;
  right: 20px;

  position: absolute;
  background-image: url(${(props) => props.weatherImg});
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

import styled from '@emotion/styled';
import { weatherImages } from '../../utils/weatherUtils';

interface WeatherProps {
  translatedWeather: string;
}

const Weather = ({ translatedWeather }: WeatherProps) => {
  const weatherImg = weatherImages[translatedWeather];

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

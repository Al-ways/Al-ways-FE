import styled from '@emotion/styled';
import rainyImage from '../../assets/icons/weather-rainy.png';

const Weather = () => {
  return <Image />;
};

export default Weather;

const Image = styled.div`
  width: 100px;
  height: 100px;
  top: 25px;
  right: 20px;

  position: absolute;
  background-image: url(${rainyImage});
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

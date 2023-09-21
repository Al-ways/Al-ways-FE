import styled from '@emotion/styled';
import rainyImage from '../../assets/main/rainy.png';

const Weather = () => {
  return <WeatherlImage />;
};

export default Weather;

const WeatherlImage = styled.div`
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

import styled from '@emotion/styled';
import WeatherMolecule from '../molecule/WeatherMolecule';
import { useState, useEffect } from 'react';
const WeatherOrganism = () => {
  const [weather, setWeather] = useState(null);

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log(lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // 현재 위치의 날씨 가져오기
  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=576217254852d28ff29e275ca843c5fe&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Container>
      <WeatherMolecule weather={weather} />
    </Container>
  );
};

export default WeatherOrganism;

const Container = styled.div`
  width: 480px;
  height: 150px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

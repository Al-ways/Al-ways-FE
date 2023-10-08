import SearchOrganism from '../organism/SearchOrganism';
import SliderMolecule from '../molecule/SliderMolecule';
import WeatherOrganism from '../organism/WeatherOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';
import { useState, useEffect } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const MainTemplate = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

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
    <>
      <SliderMolecule />
      <SearchOrganism />
      <WeatherOrganism weather={weather} />
      <PopularLocationOrganism />
      <CommunityOrganism />
    </>
  );
};

export default MainTemplate;

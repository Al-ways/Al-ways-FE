import SearchOrganism from '../organism/SearchOrganism';
import SliderMolecule from '../molecule/SliderMolecule';
import WeatherOrganism from '../organism/WeatherOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';
import { useEffect, useState } from 'react';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { getWeatherData } from '../../api/weather';

const MainTemplate = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null); // 날씨 데이터
  const { lat, lon } = useCurrentLocation(); // 현재 위치 받아오는 custom hook

  // 현재 위치 기반 날씨 가져오는 함수
  const getWeatherDataByCurrentLocation = async (lat: number, lon: number) => {
    try {
      const data = await getWeatherData(lat, lon);
      setWeather(data);
    } catch (error) {
      console.error(`데이터를 불러오지 못했습니다. : ${error}`);
    }
  };

  // 현재 위치 기반 날씨 가져오는 함수에 arguments로 현재 위치 삽입해 현재 위치 날씨 가져오기
  useEffect(() => {
    if (lat !== null && lon !== null) {
      getWeatherDataByCurrentLocation(lat, lon);
    }
  }, [lat, lon]);

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

import SearchOrganism from '../organism/SearchOrganism';
import SliderMolecule from '../molecule/SliderMolecule';
import WeatherOrganism from '../organism/WeatherOrganism';
import PopularLocationOrganism from '../organism/PopularLocationOrganism';
import CommunityOrganism from '../organism/CommunityOrganism';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../../api/weather';
import { getLocationAddressData } from '../../api/geocode';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

const MainTemplate = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null); // 날씨 데이터
  const [address, setAddress] = useState<string | null>(null); // 주소
  const { coords } = useCurrentLocation();

  // 현재 위치 기반 날씨 가져오는 유즈이펙트
  useEffect(() => {
    const getWeatherByCurrentLocation = async ({ lat, lon }: CoordsData) => {
      try {
        const data = await getWeatherData({ lat, lon });
        setWeather(data);
      } catch (error) {
        console.error(`날씨 데이터를 불러오지 못했습니다. : ${error}`);
      }
    };

    if (coords !== null) {
      getWeatherByCurrentLocation(coords);
    }
  }, [coords]);

  // 현재 주소 가져오는 유즈이펙트
  useEffect(() => {
    const getAddressByCurrentLocation = async ({ lat, lon }: CoordsData) => {
      try {
        const data = await getLocationAddressData({ lat, lon });
        setAddress(data);
      } catch (error) {
        console.error(`주소 데이터를 불러오지 못했습니다. : ${error}`);
      }
    };

    if (coords !== null) {
      getAddressByCurrentLocation(coords);
    }
  }, [coords]);

  console.log(`weather: ${weather}, address: ${address}`);

  return (
    <>
      <SliderMolecule />
      <WeatherOrganism weather={weather} address={address} />
      <SearchOrganism />
      <PopularLocationOrganism address={address} />
      <CommunityOrganism />
    </>
  );
};

export default MainTemplate;

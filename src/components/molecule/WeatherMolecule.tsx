import styled from '@emotion/styled';
import Text from '../atom/Text';
import Weather from '../atom/Weather';
import { weatherTranslation } from '../../utils/weatherUtils';
import { COLORS } from '../../share/colors';

const WeatherMolecule = ({ weather, address }: CurrentLocationData) => {
  if (!address || !weather) return null;

  // 번역한 날씨명 변수
  const translatedWeather = weatherTranslation[weather.weather[0].description];

  console.log(weather);

  // 주소 내 추출한 구 이름
  const district = address.split(' ')[2];

  // 설정한 날씨 배경색
  // const backgroundColor = weatherBackgroundColor[translatedWeather];

  // console.log(`현재 날씨: ${weather.weather[0].description}`);

  // const weatherTitle = `오늘의 ? ${translatedWeather}`;

  // let weatherTitle;
  // switch (translatedWeather) {
  //   case '맑음':
  //     weatherTitle = '오늘은 술 마시기 좋은 날!';
  //     break;
  //   case '흐림':
  //     weatherTitle = '흐린 날엔 어디로 가볼까?';
  //     break;
  //   case '천둥번개':
  //     weatherTitle = '이 날씨에 나가시려구요? ';
  //     break;
  //   case '안개':
  //     weatherTitle = `${translatedWeather} 낀 날엔 어디로 가볼까?`;
  //     break;
  //   default:
  //     weatherTitle = '오늘같은 날씨엔 어디로?';
  //     break;
  // }

  return (
    <WheatherBanner backgroundColor={COLORS.gray}>
      <Text
        width={'400'}
        height={'20'}
        fonts={'20'}
        fontw={'400'}
        mt={'20'}
        txt={'오늘 날씨에 맞는 술집을 추천해드려요.'}
      />
      <Text
        width={'400'}
        height={'14'}
        fonts={'14'}
        txt={`${district}, ${Math.floor(
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

const WheatherBanner = styled.div<{ backgroundColor: string }>`
  width: 440px;
  height: 110px;
  border-radius: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

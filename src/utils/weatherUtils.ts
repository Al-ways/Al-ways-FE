import { COLORS } from '../share/colors';
import sunnyImage from '.././assets/main/weather/weather-sunny.png';
import cloudImage from '.././assets/main/weather/weather-cloud.png';
import mistImage from '.././assets/main/weather/weather-mist.png';
import thunderImage from '.././assets/main/weather/weather-thunder.png';
import rainyImage from '.././assets/main/weather/weather-rainy.png';
import snowImage from '.././assets/main/weather/weather-sunny.png';

// 현재 날씨 번역
export const weatherTranslation: { [key: string]: string } = {
  'clear sky': '맑음',
  'few clouds': '흐림',
  'scattered clouds': '흐림',
  'broken clouds': '흐림',
  'overcast clouds': '흐림',
  'shower rain': '비',
  'light rain': '비',
  'moderate rain': '비',
  haze: '안개',
  Rain: '비',
  Thunderstorm: '천둥번개',
  snow: '눈',
  mist: '안개',
};

// // 혀재 날씨에 따른 배경색
// export const weatherBackgroundColor: { [key: string]: string } = {
//   맑음: '#fc8c0a',
//   흐림: COLORS.gray,
//   비: COLORS.gray,
//   천둥번개: COLORS.dark_gray,
//   눈: COLORS.deep_sky,
//   안개: COLORS.gray,
// };

// 현재 날씨에 따른 날씨 이미지
export const weatherImages: { [key: string]: string } = {
  맑음: sunnyImage,
  흐림: cloudImage,
  비: rainyImage,
  천둥번개: thunderImage,
  눈: snowImage,
  안개: mistImage,
};

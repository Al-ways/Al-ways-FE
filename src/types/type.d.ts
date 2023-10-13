/* 날씨 데이터에서 필요한 데이터들의 타입 */
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

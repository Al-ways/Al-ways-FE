// 날씨 데이터에서 필요한 데이터들의 타입
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

// 위도, 경도의 타입
interface CoordsData {
  lat: number;
  lon: number;
}

// 현재 날씨 및 위치 타입
interface CurrentLocationData {
  weather: WeatherData | null;
  address: string | null;
}

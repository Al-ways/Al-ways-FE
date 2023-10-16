// 날씨 가져오는 api
// lat과 lon을 매개변수로 받아 현재 위치의 날씨를 가져옴

export const getWeatherData = async ({ lat, lon }: CoordsData) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=576217254852d28ff29e275ca843c5fe&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

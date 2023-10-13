export const getWeatherData = async (lat: number, lon: number) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=576217254852d28ff29e275ca843c5fe&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

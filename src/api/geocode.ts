// 위도, 경도를 받아 일반적인 주소로 변환해주는 api
// lat과 lon을 매개변수로 받아 현재 좌표에 따른 주소로 번역해줌

export const getLocationAddressData = async ({ lat, lon }: CoordsData) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBpuyJC1CcRcg7_jVLfZkNc554upIZ_wb4`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results[0].formatted_address;
};

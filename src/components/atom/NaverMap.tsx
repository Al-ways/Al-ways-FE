import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/configureStore';
import loading from '../../assets/loading.gif';
import { stores } from '../../api/map';
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}
const NaverMap = () => {
  const mapRef = useRef(null);
  const location = useSelector((state: RootState) => state.currentLocation);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${
      import.meta.env.VITE_NAVER_KEY
    }`;
    script.async = true;

    // handleScriptLoad (map을 생성, marker를 찍는 작업)
    const handleScriptLoad = () => {
      const container = mapRef.current; // 지도를 표시할 DOM 요소 선택
      const options = {
        center: new window.naver.maps.LatLng(
          location.latitude,
          location.longitude,
        ), // 지도의 중심 좌표 설정 (예시: 서울)
        zoom: 17, // 지도의 확대 레벨 설정
      };
      const mapInstance = new window.naver.maps.Map(container, options); // 지도 생성 및 표시
      //   1.다중 마커 작업
      //   const locations = [   // 여러 위치 정보 배열
      //   { lat: 37.5665, lng: 126.978 },
      //   { lat: 37.5675, lng: 126.979 },
      //   { lat: 37.5685, lng: 126.980 },
      //   // 추가적인 위치 정보...
      // ];

      stores.forEach((location) => {
        const markerOptions = {
          position: new window.naver.maps.LatLng(location.lat, location.lng),
          map: mapInstance,
        };

        new window.naver.maps.Marker(markerOptions); // 각 위치에 대한 마커 생성 및 표시
      });
      // const markerOptions = {
      //   position: new window.naver.maps.LatLng(
      //     location.latitude,
      //     location.longitude,
      //   ),
      //   map: mapInstance,
      // };
      // new window.naver.maps.Marker(markerOptions);
      // 2. 현재 위치에서의 가게 마커 정보 찍기

      // const bounds = mapInstance.getBounds(); // 현재 지도의 뷰포트 영역
      // console.log(bounds.hasLatLng(markerOptions.position));

      // locations.forEach(location => {
      //   const position = new window.naver.maps.LatLng(location.lat, location.lng);

      //   if(bounds.hasLatLng(position)) {   // 해당 위치가 뷰포트 내부에 있는지 확인
      //     const markerOptions = {
      //       position,
      //       map: mapInstance,
      //     };

      //     new window.naver.maps.Marker(markerOptions);   // 각 위치에 대한 마커 생성 및 표시
      //    }
      //  });
    };

    script.addEventListener('load', handleScriptLoad);
    document.head.appendChild(script);

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
        document.head.removeChild(script);
      }
    };
  }, [location]);
  if (!location.latitude || !location.longitude)
    return (
      <NaverMapView>
        <Loading src={loading} alt="loadig" />
      </NaverMapView>
    );
  return (
    <Container>
      <NaverMapView ref={mapRef} />
    </Container>
  );
};
const Container = styled.div`
  margin: 30px auto;
`;
const NaverMapView = styled.div`
  width: 440px;
  height: 440px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = styled.img`
  width: 200px;
  height: 200px;
`;
export default NaverMap;

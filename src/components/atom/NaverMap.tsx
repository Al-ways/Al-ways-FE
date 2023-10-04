import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}
const NaverMap = () => {
  const mapRef = useRef(null);

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
        center: new window.naver.maps.LatLng(37.583148999097, 127.04697090384), // 지도의 중심 좌표 설정 (예시: 서울)
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

      // locations.forEach(location => {
      //   const markerOptions = {
      //     position: new window.naver.maps.LatLng(location.lat, location.lng),
      //     map: mapInstance,
      //   };

      //   new window.naver.maps.Marker(markerOptions); // 각 위치에 대한 마커 생성 및 표시
      // });
      const markerOptions = {
        position: new window.naver.maps.LatLng(
          37.583148999097,
          127.04697090384,
        ),
        map: mapInstance,
      };
      new window.naver.maps.Marker(markerOptions);
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
  }, []);

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
`;

export default NaverMap;

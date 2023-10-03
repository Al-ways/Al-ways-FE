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

    const handleScriptLoad = () => {
      const container = mapRef.current; // 지도를 표시할 DOM 요소 선택
      const options = {
        center: new window.naver.maps.LatLng(37.5665, 126.978), // 지도의 중심 좌표 설정 (예시: 서울)
        zoom: 10, // 지도의 확대 레벨 설정
      };
      const mapInstance = new window.naver.maps.Map(container, options); // 지도 생성 및 표시
      const markerOptions = {
        position: new window.naver.maps.LatLng(37.5665, 126.978),
        map: mapInstance,
      };
      new window.naver.maps.Marker(markerOptions);
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

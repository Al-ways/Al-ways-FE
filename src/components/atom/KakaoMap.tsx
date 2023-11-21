import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/configureStore';
import { useSearchQueryString } from '../../hooks/useSearchQueryString';
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

function KakaoMap() {
  // 지도 영역 ref
  const kakaoMap = useRef(null);
  // 현재 위치 정보
  const location = useSelector((state: RootState) => state.currentLocation);
  // 검색어
  const { q } = useSearchQueryString('map');

  useEffect(() => {
    // kakao map script load
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = kakaoMap.current;
        const options = {
          center: new window.kakao.maps.LatLng(
            location?.latitude,
            location?.longitude,
          ),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);

        const places = new window.kakao.maps.services.Places();
        const searchOptions = {
          location: new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude,
          ),
          radius: 2000,
          sort: window.kakao.maps.services.SortBy.DISTANCE,
        };
        places.keywordSearch(
          '술집',
          (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              for (let i = 0; i < result.length; i++) {
                const place = result[i];
                const marker = new window.kakao.maps.Marker({
                  position: new window.kakao.maps.LatLng(place.y, place.x),
                });
                marker.setMap(map);
              }
            }
          },
          searchOptions,
        );

        if (q) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(q, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x,
                ),
              });
              marker.setMap(map);
            }
          });
        }
      });
    };

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, [location, q]);

  return (
    <Container>
      <KakaoMapView ref={kakaoMap} />
    </Container>
  );
}

export default KakaoMap;
const Container = styled.div`
  margin: 30px auto;
`;
const KakaoMapView = styled.div`
  width: 440px;
  height: 440px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

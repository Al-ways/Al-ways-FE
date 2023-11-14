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
interface Marker {
  setMap: (map: null | object) => void;
  getPosition: () => object;
}
interface LatLng {
  equals: (latlng: LatLng) => boolean;
}
const NaverMap = () => {
  const mapRef = useRef(null);
  const location = useSelector((state: RootState) => state.currentLocation);

  useEffect(() => {
    let markers: Marker[] = [];

    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${
      import.meta.env.VITE_NAVER_KEY
    }`;
    script.async = true;

    const handleScriptLoad = () => {
      const container = mapRef.current;
      const options = {
        center: new window.naver.maps.LatLng(
          location.latitude,
          location.longitude,
        ),
        zoom: 17,
      };

      const mapInstance = new window.naver.maps.Map(container, options);

      const addMarkersInBounds = () => {
        const bounds = mapInstance.getBounds();

        stores.forEach((store: any) => {
          const position = new window.naver.maps.LatLng(store?.lat, store?.lng);

          if (bounds.hasLatLng(position)) {
            const existingMarker = markers.find((marker: Marker) =>
              (marker.getPosition() as LatLng).equals(position),
            );

            if (!existingMarker) {
              const markerOptions = { position, map: mapInstance };
              const marker = new window.naver.maps.Marker(markerOptions);
              markers.push(marker);
            }
          }
        });

        markers = markers.filter((marker) => {
          if (bounds.hasLatLng(marker.getPosition())) {
            return true;
          } else {
            marker.setMap(null);
            return false;
          }
        });
      };

      addMarkersInBounds();

      window.naver.maps.Event.addListener(
        mapInstance,
        'dragend',
        addMarkersInBounds,
      );
    };

    script.addEventListener('load', handleScriptLoad);
    document.head.appendChild(script);

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
        document.head.removeChild(script);
      }

      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
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

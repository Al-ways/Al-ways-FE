import styled from '@emotion/styled';
import Text from '../atom/Text';
import Location from '../atom/Location';

const PopularLocationHeaderMolecule = ({
  weather,
}: {
  weather: WeatherData | null;
}) => {
  return (
    <PopularLocationHeader>
      <Text mr={'10'} fontw={'700'} txt={'이번 주 인기 술집'} />
      <IconTitle>
        <Location />
        <Text
          txt={weather ? weather.name : '위치 정보를 로딩중입니다.'}
          fonts={weather ? '16' : '12'}
        />
      </IconTitle>
    </PopularLocationHeader>
  );
};

export default PopularLocationHeaderMolecule;

const PopularLocationHeader = styled.div`
  width: 440px;
  height: 20x;
  font-size: 20px;
  margin-bottom: 20px;

  display: flex;
`;

const IconTitle = styled.div`
  display: flex;
  align-items: flex-end;
`;

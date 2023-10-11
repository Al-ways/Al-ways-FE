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
      <Text mr={'20'} txt={'이번 주 인기 술집'} />
      <IconTitle>
        <Location />
        <Text txt={weather?.name} />
      </IconTitle>
    </PopularLocationHeader>
  );
};

export default PopularLocationHeaderMolecule;

const PopularLocationHeader = styled.div`
  width: 440px;
  height: 24px;
  font-size: 24px;
  margin-bottom: 20px;

  display: flex;
`;

const IconTitle = styled.div`
  display: flex;
`;

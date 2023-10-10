import styled from '@emotion/styled';
import WeatherMolecule from '../molecule/WeatherMolecule';
import { useNavigate } from 'react-router-dom';
import LoadingMolecule from '../molecule/LoadingMolecule';

const WeatherOrganism = ({ weather }: { weather: WeatherData | null }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/recommended')}>
      {weather ? (
        <WeatherMolecule weather={weather} />
      ) : (
        <LoadingMolecule txt={'날씨 정보를 로딩중입니다.'} />
      )}
    </Container>
  );
};

export default WeatherOrganism;

const Container = styled.div`
  width: 480px;
  height: 150px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

import styled from '@emotion/styled';
import WeatherMolecule from '../molecule/WeatherMolecule';
const WeatherOrganism = () => {
  return (
    <Container>
      <WeatherMolecule />
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

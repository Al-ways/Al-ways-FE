import styled from '@emotion/styled';
import OptionSelectMolecule from '../components/molecule/OptionSelectMolecule';
import OptionContentMolecule from '../components/molecule/OptionContentMolecule';
const List = () => {
  return (
    <Container>
      <OptionSelectMolecule />
      <OptionContentMolecule />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default List;

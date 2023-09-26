import styled from '@emotion/styled';
import Text from '../atom/Text';
const OptionContentMolecule = () => {
  return (
    <Container>
      <Text txt={'n개의 장소'} fonts={'24'} width={'440'} height={'24'} />
    </Container>
  );
};
const Container = styled.div``;
export default OptionContentMolecule;

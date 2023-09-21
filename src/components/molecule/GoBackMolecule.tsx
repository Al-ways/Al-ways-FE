import styled from '@emotion/styled';
import GoBackIcon from '../atom/GoBackIcon';

const GoBackMolecule = () => {
  return (
    <GoBackContainer>
      <GoBackIcon />
    </GoBackContainer>
  );
};

export default GoBackMolecule;

const GoBackContainer = styled.div`
  width: 480px;
  height: 50px;
`;

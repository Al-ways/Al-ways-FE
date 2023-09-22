import styled from '@emotion/styled';
import ProfileMolecule from '../molecule/ProfileMolecule';

const ProfileOrganism = () => {
  return (
    <Container>
      <ProfileMolecule />
    </Container>
  );
};

export default ProfileOrganism;

const Container = styled.div`
  width: 480px;
  height: 150px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
`;

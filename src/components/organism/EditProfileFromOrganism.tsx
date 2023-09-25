import styled from '@emotion/styled';
import Img from '../atom/Img';
import ProfileEditNickNameMolecule from '../molecule/ProfileEditNickNameMolecule';
import Button from '../atom/Button';
const EditProfileFromOrganism = () => {
  return (
    <Container>
      <Img
        src={'1'}
        width={'125'}
        height={'125'}
        br={'100'}
        mt={'20'}
        mb={'20'}
      />
      <ProfileEditNickNameMolecule />
      <Button
        width={400}
        height={50}
        border={'none'}
        bgc={'#d9d9d9'}
        br={10}
        mt={20}
      >
        변경하기
      </Button>
    </Container>
  );
};
const Container = styled.div`
  width: 440px;
  height: 305px;
  border-radius: 10px;
  background-color: #ae73b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export default EditProfileFromOrganism;

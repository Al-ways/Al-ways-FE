import styled from '@emotion/styled';
import Input from '../atom/Input';
import Button from '../atom/Button';
const ProfileEditNickNameMolecule = () => {
  return (
    <Container>
      <Input
        width={180}
        height={50}
        border={'none'}
        br={10}
        placeText={'닉네임'}
        bgc={'#d9d9d9'}
        mr={20}
      />
      <Button width={160} height={50} border={'none'} bgc={'#d9d9d9'} br={10}>
        중복 체크
      </Button>
    </Container>
  );
};
const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;
export default ProfileEditNickNameMolecule;

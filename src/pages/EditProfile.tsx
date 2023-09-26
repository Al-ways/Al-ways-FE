import styled from '@emotion/styled';
import Text from '../components/atom/Text';
import EditProfileFromOrganism from '../components/organism/EditProfileFromOrganism';
import BreakLineImage from '../components/atom/BreakLineImage';
const EditProfile = () => {
  return (
    <Container>
      <Text
        width={'440'}
        height={'24'}
        fonts={'24'}
        mb={'20'}
        txt={'프로필 관리'}
      />
      <EditProfileFromOrganism />
      <BreakLineImage />
      <Text
        width={'440'}
        height={'16'}
        color={'#3D3D3D'}
        txt={'회원을 탈퇴하시겠습니까?'}
        align={'end'}
        fontw={'100'}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default EditProfile;

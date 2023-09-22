import styled from '@emotion/styled';
import SocialLoginButtonMolecule from '../molecule/SocialLoginButtonMolecule';
const SocialLoginOranism = () => {
  return (
    <Container>
      <SocialLoginButtonMolecule name={'kakao'} />
      <SocialLoginButtonMolecule name={'naver'} />
      <SocialLoginButtonMolecule name={'google'} />
    </Container>
  );
};
const Container = styled.div`
  width: 480px;
  height: 300px;
  margin: 0 auto;
`;

export default SocialLoginOranism;

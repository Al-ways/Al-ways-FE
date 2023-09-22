import styled from '@emotion/styled';
import SocialLoginButtonMolecule from '../molecule/SocialLoginButtonMolecule';
import Text from '../atom/Text';
const SocialLoginOranism = () => {
  return (
    <Container>
      <Text
        txt={'로그인 해주세요.'}
        width={'440'}
        height={'150'}
        align={'center'}
        fonts={'40'}
      />
      <LoginBox>
        <SocialLoginButtonMolecule name={'kakao'} />
        <SocialLoginButtonMolecule name={'naver'} />
        <SocialLoginButtonMolecule name={'google'} />
      </LoginBox>
    </Container>
  );
};
const Container = styled.div`
  width: 440px;
  height: 300px;
  border-radius: 12px;
  background-color: #ae73b8;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 150px;
`;

export default SocialLoginOranism;

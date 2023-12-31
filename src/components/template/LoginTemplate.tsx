import styled from '@emotion/styled';
import SocialLoginOranism from '../organism/SocialLoginOranism';
import bgLogin from '../../assets/login/bgLogin.png';
const LoginTemplate = () => {
  return (
    <Container>
      <SocialLoginOranism />
    </Container>
  );
};
const Container = styled.div`
  width: 480px;
  height: 909px;

  background-image: url(${bgLogin});
  background-size: cover;
  background-repeat: no-repeat;
`;
export default LoginTemplate;

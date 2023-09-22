import styled from '@emotion/styled';
import SocialLoginOranism from '../components/organism/SocialLoginOranism';
import bgLogin from '../assets/login/bgLogin.png';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import GoBackMolecule from '../components/molecule/GoBackMolecule';
import { useParams } from 'react-router-dom';
const Login = () => {
  const ref = useParams();
  console.log(ref.id);

  return (
    <Container>
      <HeaderMolecule />
      <GoBackMolecule />
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
export default Login;
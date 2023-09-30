import styled from '@emotion/styled';
import loginImage from '../../assets/icons/login.png';

const LoginImage = () => {
  return <Login />;
};

export default LoginImage;

const Login = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;

  cursor: pointer;
  background-image: url(${loginImage});
  background-size: cover;
`;

import styled from '@emotion/styled';
import logoImage from '../../assets/icons/logo.png';
import { useNavigate } from 'react-router-dom';

const LogoIcon = () => {
  const navigate = useNavigate();
  return (
    <Logo
      onClick={() => {
        navigate('/');
      }}
    />
  );
};

export default LogoIcon;

const Logo = styled.div`
  width: 150px;
  height: 50px;

  cursor: pointer;
  background-image: url(${logoImage});
`;

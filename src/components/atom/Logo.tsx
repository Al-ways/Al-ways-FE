import styled from '@emotion/styled';
import logoImage from '../../assets/icons/logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/');
      }}
    />
  );
};

export default Logo;

const Button = styled.div`
  width: 150px;
  height: 50px;

  cursor: pointer;
  background-image: url(${logoImage});
`;

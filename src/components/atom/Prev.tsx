import styled from '@emotion/styled';
import prevImage from '../../assets/icons/prev.png';
import { useNavigate } from 'react-router-dom';

const Prev = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default Prev;

const Button = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${prevImage});
  background-size: cover;
`;

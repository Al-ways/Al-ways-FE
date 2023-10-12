import styled from '@emotion/styled';
import locationImage from '../../assets/icons/location.png';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const navigate = useNavigate();
  return (
    <Image
      onClick={() => {
        navigate('/');
      }}
    />
  );
};

export default Location;

const Image = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  background-size: cover;
  background-image: url(${locationImage});
`;

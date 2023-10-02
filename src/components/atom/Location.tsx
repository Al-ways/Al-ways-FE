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
  width: 24px;
  height: 24px;
  margin-right: 5px;

  background-image: url(${locationImage});
`;

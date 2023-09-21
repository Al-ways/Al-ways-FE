import styled from '@emotion/styled';
import locationImage from '../../assets/icons/location.png';
import { useNavigate } from 'react-router-dom';

const LocationIcon = () => {
  const navigate = useNavigate();
  return (
    <Location
      onClick={() => {
        navigate('/');
      }}
    />
  );
};

export default LocationIcon;

const Location = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  background-image: url(${locationImage});
`;

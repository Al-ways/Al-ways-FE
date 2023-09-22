import styled from '@emotion/styled';
import GoBackImage from '../../assets/icons/go-back.png';
import { useNavigate } from 'react-router-dom';

const GoBackIcon = () => {
  const navigate = useNavigate();

  return (
    <GoBack
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default GoBackIcon;

const GoBack = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${GoBackImage});
`;

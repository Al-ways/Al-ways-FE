import styled from '@emotion/styled';
import GoImage from '../../assets/icons/go.png';

const GoIcon = () => {
  return <Go />;
};

export default GoIcon;

const Go = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${GoImage});
`;

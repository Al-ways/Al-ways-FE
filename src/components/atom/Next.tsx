import styled from '@emotion/styled';
import nextImage from '../../assets/icons/next.png';

const Next = () => {
  return <Button />;
};

export default Next;

const Button = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${nextImage});
`;

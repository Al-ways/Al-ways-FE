import styled from '@emotion/styled';
import closeImage from '../../assets/icons/close.png';

interface CloseProps {
  toggleMenu?: () => void;
}

const Close = ({ toggleMenu }: CloseProps) => {
  return (
    <Container>
      <Button onClick={toggleMenu} />
    </Container>
  );
};

export default Close;

const Container = styled.div`
  width: 280px;
  height: 24px;
  margin: 20px 0 30px 0;
`;

const Button = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
  background-image: url(${closeImage});
`;
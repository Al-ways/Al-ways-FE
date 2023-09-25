import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';

interface DotBarProps {
  BannerImages: Array<string>;
  activeDot: number;
  onClickDot: (index: number) => void;
}
interface DotProp {
  isActive: boolean;
}

const DotBar = ({ BannerImages, activeDot, onClickDot }: DotBarProps) => {
  return (
    <Container>
      {BannerImages.map((_, index) => (
        <Dot
          key={index}
          isActive={activeDot === index}
          onClick={() => onClickDot(index)}
        />
      ))}
    </Container>
  );
};

export default DotBar;

const Container = styled.div`
  width: 75px;
  height: 25px;

  right: 20px;
  bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
`;

const Dot = styled.div<DotProp>`
  width: 7px;
  height: 7px;
  border-radius: 50%;

  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? COLORS.dark_gray : COLORS.gray};
`;

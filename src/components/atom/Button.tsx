import styled from '@emotion/styled';
interface ButtonProps {
  width: number;
  height: number;
  border?: string;
  children?: React.ReactNode;
  bgc?: string;
  color?: string;
  br?: number;
}
const Button = ({
  width,
  height,
  children,
  border,
  bgc,
  color,
  br,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      border={border}
      bgc={bgc}
      color={color}
      br={br}
    >
      {children}
    </Container>
  );
};
const Container = styled.div<ButtonProps>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  text-align: center;
  line-height: ${(props) => props.height + 'px'};
  border: ${(props) => props.border || 'none'};
  background-color: ${(props) => props.bgc || 'white'};
  color: ${(props) => props.color || 'black'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
`;
export default Button;

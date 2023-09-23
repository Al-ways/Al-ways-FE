import styled from '@emotion/styled';

interface InputProps {
  width: number;
  height: number;
  border?: string;
  br?: number;
  placeText?: string;
  align?: string;
  bgc?: string;
}
const Input = ({
  width,
  height,
  border,
  br,
  placeText,
  align,
  bgc,
}: InputProps) => {
  return (
    <Container
      width={width}
      height={height}
      border={border}
      br={br}
      placeholder={placeText}
      align={align}
      bgc={bgc}
    />
  );
};
interface ContainerProps {
  width: number;
  height: number;
  border?: string;
  br?: number;
  align?: string;
  bgc?: string;
}
const Container = styled.input<ContainerProps>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  text-align: ${(props) => props.align || 'left'};
  line-height: ${(props) => props.height + 'px'};
  border: ${(props) => props.border || 'none'};
  background-color: ${(props) => props.bgc || 'white'};
  color: black;
  border-radius: ${(props) => props.br + 'px' || '0px'};
  padding: 0px 20px;
  :focus {
    outline: none;
  }
`;
export default Input;

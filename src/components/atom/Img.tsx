import styled from '@emotion/styled';
interface ImgProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  br?: string;
}
const Img = ({ src, alt, width, height, br }: ImgProps) => {
  return (
    <ImgContainer src={src} alt={alt} width={width} height={height} br={br} />
  );
};
const ImgContainer = styled.img<{
  width?: string;
  height?: string;
  br?: string;
}>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
  background-size: cover;
`;
export default Img;

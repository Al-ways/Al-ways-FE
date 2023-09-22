import styled from '@emotion/styled';

interface ImgProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  br?: string;
  /* 원준 추가 */
  mt?: string;
}
const Img = ({ src, alt, width, height, br, mt }: ImgProps) => {
  return (
    <ImgContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      br={br}
      mt={mt}
    />
  );
};
const ImgContainer = styled.img<{
  width?: string;
  height?: string;
  br?: string;
  mt?: string;
}>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
  background-size: cover;
  /* 원준 추가 */
  margin-top: ${(props) => props.mt + 'px' || '0px'};
  background-position: center;
`;
export default Img;

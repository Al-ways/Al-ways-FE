import styled from '@emotion/styled';

interface ImgProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  br?: string;
  /* 원준 추가 */
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  btlr?: string;
  btrr?: string;
}
const Img = ({
  src,
  alt,
  width,
  height,
  br,
  mt,
  mb,
  mr,
  ml,
  btlr,
  btrr,
}: ImgProps) => {
  return (
    <ImgContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      br={br}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      btlr={btlr}
      btrr={btrr}
    />
  );
};
const ImgContainer = styled.img<{
  width?: string;
  height?: string;
  br?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  btlr?: string;
  btrr?: string;
}>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
  background-size: cover;
  /* 원준 추가 */
  margin-top: ${(props) => props.mt + 'px' || '0px'};
  margin-bottom: ${(props) => props.mb + 'px' || '0px'};
  margin-right: ${(props) => props.mr + 'px' || '0px'};
  margin-left: ${(props) => props.ml + 'px' || '0px'};
  border-top-left-radius: ${(props) => props.btlr + 'px' || '0px'};
  border-top-right-radius: ${(props) => props.btrr + 'px' || '0px'};
  background-position: center;
`;
export default Img;

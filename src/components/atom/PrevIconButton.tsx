import styled from '@emotion/styled';
// import { ArrowIosBackOutline } from '@emotion-icons/evaicons-outline/ArrowIosBackOutline';

const PrevIconButton = () => {
  return (
    <ImgButtonContainer>
      <PrevButton>{/* <PrevIcon /> */}</PrevButton>
    </ImgButtonContainer>
  );
};
const ImgButtonContainer = styled.div`
  width: 460px;
  height: 50px;
  margin-left: 20px;
`;
const PrevButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
// const PrevIcon = styled(ArrowIosBackOutline)`
//   width: 50px;
//   height: 50px;
//   color: white;
//   margin-left: -5.6px;
// `;
export default PrevIconButton;

import styled from '@emotion/styled';
import ProgressBar from '../components/atom/ProgressBar';
const Dumytsx = () => {
  return (
    <DumyContainer>
      <AtomBox>
        <ProgressBar page={1} />
      </AtomBox>
    </DumyContainer>
  );
};
const DumyContainer = styled.div`
  width: 414px;
  height: 896px;
  margin: 0 auto;
  background-color: #000000;
`;
const AtomBox = styled.div`
  margin: 0 auto;
  padding-top: 100px;
`;
export default Dumytsx;

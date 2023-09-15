import styled from '@emotion/styled';

interface ProgressBarProps {
  page: number;
}

const ProgressBar = ({ page }: ProgressBarProps) => {
  const progressbar = page * 14.28;

  return (
    <ProgressBarContainer>
      <ProgressBarItem wid={progressbar}></ProgressBarItem>
    </ProgressBarContainer>
  );
};
const ProgressBarContainer = styled.div`
  width: 300px;
  height: 10px;
  background-color: #3d3d3d;
  border-radius: 10px;
`;
const ProgressBarItem = styled.div<{ wid: number }>`
  background-color: #ffffff;
  width: ${(props) => props.wid + '%'};
  height: 10px;
  border-radius: 10px;
  transition: 0.5s;
`;
export default ProgressBar;

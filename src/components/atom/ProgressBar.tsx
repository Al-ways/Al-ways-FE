import styled from '@emotion/styled';
import React from 'react';

interface ProgressBarProps {
  page: number;
}

const ProgressBar = ({ page }: ProgressBarProps) => {
  const progressbar = page * 16.66;

  return (
    <ProgressBarContainer>
      <ProgressBarItem wid={progressbar}></ProgressBarItem>
    </ProgressBarContainer>
  );
};
const ProgressBarContainer = styled.div`
  width: 400px;
  height: 15px;
  background-color: #3d3d3d;
  border-radius: 10px;
`;
const ProgressBarItem = styled.div<{ wid: number }>`
  background-color: #ffffff;
  width: ${(props) => props.wid + '%'};
  height: 15px;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;
export default React.memo(ProgressBar);

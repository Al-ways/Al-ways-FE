import styled from '@emotion/styled';

interface ProgressTextProps {
  page: number;
}
const ProgressText = ({ page }: ProgressTextProps) => {
  return <ProgressTextContainer>{`${page}/7`}</ProgressTextContainer>;
};

const ProgressTextContainer = styled.div`
  width: 295px;
  height: 10px;
  color: #ffffff;
  font-size: 10px;
  text-align: end;
  margin-bottom: 5px;
`;
export default ProgressText;

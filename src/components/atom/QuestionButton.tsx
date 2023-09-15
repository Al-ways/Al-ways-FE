import styled from '@emotion/styled';
interface ProgressButtonProps {
  txt: string;
}

const QuestionButton = ({ txt }: ProgressButtonProps) => {
  return <ProgressButtonContainer>{txt}</ProgressButtonContainer>;
};
const ProgressButtonContainer = styled.button`
  width: 300px;
  height: 50px;
  color: #ffffff;
  background-color: #ffbaab;
  border-radius: 10px;
  margin-bottom: 15px;
`;
export default QuestionButton;

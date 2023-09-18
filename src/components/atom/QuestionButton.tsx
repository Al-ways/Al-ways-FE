import styled from '@emotion/styled';
import Text from './Text';
interface ProgressButtonProps {
  txt: string;
}

const QuestionButton = ({ txt }: ProgressButtonProps) => {
  return (
    <ProgressButtonContainer>
      <Text
        width={'400'}
        height={'50'}
        align={'center'}
        vertical={'50'}
        fonts={'20'}
        txt={txt}
      />
    </ProgressButtonContainer>
  );
};
const ProgressButtonContainer = styled.button`
  width: 400px;
  height: 100px;
  color: #ffffff;
  background-color: #2b324b;
  border: none;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
`;
export default QuestionButton;

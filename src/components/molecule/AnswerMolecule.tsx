import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
interface QuestionMoeculeProps {
  answer: string[];
}
const AnswerMolecule = ({ answer }: QuestionMoeculeProps) => {
  return (
    <QuestionMoleculeContainer>
      <QuestionButton txt={answer[0]} />
      <QuestionButton txt={answer[1]} />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;
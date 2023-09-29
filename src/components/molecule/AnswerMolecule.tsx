import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examination } from '../../api/examination';
interface QuestionMoeculeProps {
  page: number;
}
const AnswerMolecule = ({ page }: QuestionMoeculeProps) => {
  const data = examination(page);
  console.log(data);

  return (
    <QuestionMoleculeContainer>
      <QuestionButton txt={data.answer[0]} />
      <QuestionButton txt={data.answer[1]} />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;

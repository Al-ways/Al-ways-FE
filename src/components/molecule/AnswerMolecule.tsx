import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examination } from '../../api/examination';
interface QuestionMoeculeProps {
  page: number;
  setPage: (page: number) => void;
}
const AnswerMolecule = ({ page, setPage }: QuestionMoeculeProps) => {
  const data = examination(page);

  return (
    <QuestionMoleculeContainer>
      <QuestionButton click={() => setPage(page)} txt={data.answer[0]} />
      <QuestionButton click={() => setPage(page)} txt={data.answer[1]} />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;

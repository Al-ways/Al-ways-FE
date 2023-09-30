import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examination } from '../../api/examination';
import { useDispatch } from 'react-redux';
import { addValue } from '../../redux/reducers/examinationSlice';
interface QuestionMoeculeProps {
  page: number;
  setPage: (page: number) => void;
}
const AnswerMolecule = ({ page, setPage }: QuestionMoeculeProps) => {
  const dispatch = useDispatch();
  const data = examination(page);

  const handler = (page: number, value: string) => {
    dispatch(addValue(value));
    setPage(page);
  };
  // if(page===6){
  //   return ()
  // }
  return (
    <QuestionMoleculeContainer>
      <QuestionButton
        click={() => handler(page, data.answer[0])}
        txt={data.answer[0]}
      />
      <QuestionButton
        click={() => handler(page, data.answer[1])}
        txt={data.answer[1]}
      />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;

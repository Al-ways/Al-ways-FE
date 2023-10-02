import ProgressHeaderMolecule from '../molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../molecule/QuestionMolecule';
import AnswerMolecule from '../molecule/AnswerMolecule';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ExaminationTemplate = () => {
  interface ExaminationState {
    value: number;
  }

  interface RootState {
    examination: ExaminationState;
  }
  const [page, setPage] = useState(0);

  const pageHandler = (page: number) => {
    if (page === 6) {
      setPage(0);
      return;
    }
    setPage(page + 1);
  };
  const value = useSelector((state: RootState) => {
    return state.examination.value;
  });
  console.log(value);

  return (
    <>
      <ProgressHeaderMolecule page={page} />
      <QuestionMolecule page={page} />
      <AnswerMolecule page={page} setPage={pageHandler} />
    </>
  );
};

export default ExaminationTemplate;

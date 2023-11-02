import ProgressHeaderMolecule from '../molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../molecule/QuestionMolecule';
import AnswerMolecule from '../molecule/AnswerMolecule';
import { useState } from 'react';

const ExaminationTemplate = () => {
  const [page, setPage] = useState(0);

  const pageHandler = (page: number) => {
    if (page === 5) {
      setPage(0);
      return;
    }
    setPage(page + 1);
  };

  return (
    <>
      <ProgressHeaderMolecule page={page} />
      <QuestionMolecule page={page} />
      <AnswerMolecule page={page} nextPage={pageHandler} />
    </>
  );
};

export default ExaminationTemplate;

import ProgressHeaderMolecule from '../molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../molecule/QuestionMolecule';
import AnswerMolecule from '../molecule/AnswerMolecule';
import { useState } from 'react';
const ExaminationTemplate = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <ProgressHeaderMolecule page={page} />
      <QuestionMolecule page={page} />
      <AnswerMolecule page={page} />
    </>
  );
};

export default ExaminationTemplate;

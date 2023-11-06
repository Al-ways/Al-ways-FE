import ProgressHeaderMolecule from '../molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../molecule/QuestionMolecule';
import AnswerMolecule from '../molecule/AnswerMolecule';
import { useExamination } from '../../hooks/useExamination';

const ExaminationTemplate = () => {
  const { page, nextPage } = useExamination();

  return (
    <>
      <ProgressHeaderMolecule page={page} />
      <QuestionMolecule page={page} />
      <AnswerMolecule page={page} nextPage={nextPage} />
    </>
  );
};

export default ExaminationTemplate;

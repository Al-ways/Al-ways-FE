import ProgressHeaderMolecule from '../molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../molecule/QuestionMolecule';
import AnswerMolecule from '../molecule/AnswerMolecule';
const ExaminationTemplate = () => {
  return (
    <>
      <ProgressHeaderMolecule page={1} />
      <QuestionMolecule page={1} question="t" />
      <AnswerMolecule answer={['1', '2']} />
    </>
  );
};

export default ExaminationTemplate;

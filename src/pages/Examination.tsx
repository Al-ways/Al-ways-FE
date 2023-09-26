import AnswerMolecule from '../components/molecule/AnswerMolecule';
import ProgressHeaderMolecule from '../components/molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../components/molecule/QuestionMolecule';

const Examination = () => {
  return (
    <>
      <ProgressHeaderMolecule page={1} />
      <QuestionMolecule page={1} question="t" />
      <AnswerMolecule answer={['1', '2']} />
    </>
  );
};

export default Examination;

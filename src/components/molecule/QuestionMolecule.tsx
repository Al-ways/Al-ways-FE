import styled from '@emotion/styled';
import Text from '../atom/Text';
interface QuestionMoleculeProps {
  page: number;
  question: string;
}
const QuestionMolecule = ({ page, question }: QuestionMoleculeProps) => {
  return (
    <QuestionMoleculeContainer>
      <Text
        width={'400'}
        height={'100'}
        vertical={'100'}
        txt={`Q${page}.`}
        align={'center'}
        fonts={'60'}
      />
      <Text
        width={'400'}
        height={'75'}
        vertical={'75'}
        txt={question}
        align={'center'}
        fonts={'20'}
      />
    </QuestionMoleculeContainer>
  );
};
const QuestionMoleculeContainer = styled.div`
  width: 400px;
  height: 240;
  margin: 0 auto;
  background-color: #3d3d3d;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export default QuestionMolecule;

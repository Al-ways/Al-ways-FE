import styled from '@emotion/styled';
const QuestionMolecule = () => {
  return (
    <QuestionMoleculeContainer>
      <Text fonts={'60px'} height={'75px'}>
        Q1.
      </Text>
      <Text fonts={'20px'} height={'100px'}>
        당신은?
      </Text>
    </QuestionMoleculeContainer>
  );
};
const QuestionMoleculeContainer = styled.div`
  width: 300px;
  height: 175px;
  margin: 0 auto;
  background-color: #3d3d3d;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const Text = styled.div<{ fonts: string; height: string }>`
  width: 300px;
  height: ${(props) => props.height};
  text-align: center;
  color: #ffffff;
  font-size: ${(props) => props.fonts};
  line-height: ${(props) => props.height};
`;
export default QuestionMolecule;

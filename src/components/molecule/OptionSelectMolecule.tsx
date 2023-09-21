import styled from '@emotion/styled';
import OptionButton from '../atom/OptionButton';
const OptionSelectMolecule = () => {
  const optionList: string[] = ['카테고리', '이자카야', 'pup'];

  return (
    <Container>
      <OptionButton list={optionList} />
      <OptionButton list={optionList} />
      <OptionButton list={optionList} />
    </Container>
  );
};
const Container = styled.div`
  width: 480px;
  height: 50px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export default OptionSelectMolecule;

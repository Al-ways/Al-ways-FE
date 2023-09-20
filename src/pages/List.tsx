import OptionButton from '../components/atom/OptionButton';
import styled from '@emotion/styled';
const List = () => {
  const optionList: string[] = ['카테고리', '이자카야', 'pup'];

  return (
    <Container>
      <OptionButton list={optionList} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default List;

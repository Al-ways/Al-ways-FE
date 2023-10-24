import styled from '@emotion/styled';
import OptionButton from '../atom/OptionButton';
const OptionSelectMolecule = () => {
  const sortOption: string[] = ['정렬', '거리순', '리뷰순', '별점순'];
  const catagoryOption: string[] = ['카테고리', '이자카야', 'pup'];
  const tagOption: string[] = ['새로운', '깨끗한', '유명한'];
  return (
    <Container>
      <OptionButton list={sortOption} type="sort" />
      <OptionButton list={catagoryOption} type="catagory" />
      <OptionButton list={tagOption} type="tag" />
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

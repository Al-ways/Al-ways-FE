import styled from '@emotion/styled';
import OptionButton from '../atom/OptionButton';

const OptionSelectMolecule = () => {
  const sortOption: string[] = ['최신순', '인기순', '거리순', '별점순'];
  const catagoryOption: string[] = ['이자카야', 'pup', 'bar', '포차', '횟집'];
  const tagOption: string[] = ['태그', '태그', '태그'];

  return (
    <Container>
      <OptionButton list={sortOption} />
      <OptionButton list={catagoryOption} />
      <OptionButton list={tagOption} />
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

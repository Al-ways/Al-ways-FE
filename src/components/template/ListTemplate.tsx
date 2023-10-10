import styled from '@emotion/styled';
import OptionSelectMolecule from '../molecule/OptionSelectMolecule';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';
import Text from '../atom/Text';
// import { useSelector } from 'react-redux';

// interface RootState {
//   optionSelect: {
//     sort: string;
//     catagory: string;
//     tag: string;
//   };
// }
const ListTemplate = () => {
  // const option = useSelector((state: RootState) => state.optionSelect);

  return (
    <Container>
      <OptionSelectMolecule />
      <Text
        txt={'n개의 장소'}
        fonts={'24'}
        width={'440'}
        height={'24'}
        mb={'20'}
      />
      <ThumbnailMolecule />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ListTemplate;

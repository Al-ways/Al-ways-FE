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
  // if (data.length === 0) {
  //   return (
  //     <TextBox>
  //       <Text
  //         width={'270'}
  //         height={'20'}
  //         align={'center'}
  //         txt={'일치하는 장소가 없습니다.'}
  //       />
  //     </TextBox>
  //   );
  // }
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
// const TextBox = styled.div`
//   width: 270px;
//   height: 20px;
// `;
export default ListTemplate;

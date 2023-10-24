import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';
import NaverMap from '../atom/NaverMap';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';
import { useSearchQueryString } from '../../hooks/useSearchQueryString';
const MapTemplate = () => {
  const { searchValue, handleInputChange, searchNavigate } =
    useSearchQueryString('map');

  return (
    <Container>
      <SearchInput
        value={searchValue}
        handleChange={handleInputChange}
        submit={searchNavigate}
      />
      <NaverMap />
      <ThumbnailMolecule />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default MapTemplate;

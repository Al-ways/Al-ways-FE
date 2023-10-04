import { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';
import NaverMap from '../atom/NaverMap';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';
const MapTemplate = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <SearchInput value={search} setValue={setSearch} />
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

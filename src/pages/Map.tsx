import styled from '@emotion/styled';
import PrevIconButton from '../components/atom/PrevIconButton';
import SearchInput from '../components/atom/SearchInput';
import { useState } from 'react';
import NaverMap from '../components/atom/NaverMap';
const Map = () => {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <PrevIconButton />
      <SearchInput value={search} setValue={setSearch} />
      <NaverMap />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Map;

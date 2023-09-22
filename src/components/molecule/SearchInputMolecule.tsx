import { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';

const SearchInputMolecule = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchContainer>
      <SearchInput value={search} setValue={setSearch} />
    </SearchContainer>
  );
};

export default SearchInputMolecule;

const SearchContainer = styled.div`
  width: 480px;
  height: 50px;
  margin-bottom: 30px;
`;

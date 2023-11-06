import { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';
import { useSearchQueryString } from '../../hooks/useSearchQueryString';

const SearchInputMolecule = () => {
  const { searchValue, handleInputChange, searchNavigate } =
    useSearchQueryString('search');

  return (
    <SearchContainer>
      <SearchInput
        value={searchValue}
        handleChange={handleInputChange}
        submit={searchNavigate}
      />
    </SearchContainer>
  );
};

export default SearchInputMolecule;

const SearchContainer = styled.div`
  width: 480px;
  height: 50px;
  margin-bottom: 30px;
`;

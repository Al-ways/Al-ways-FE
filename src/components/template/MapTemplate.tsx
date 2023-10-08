import { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';
import NaverMap from '../atom/NaverMap';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';
// import { useNavigate, useSearchParams } from 'react-router-dom';
const MapTemplate = () => {
  const [searchValue, setSearchValue] = useState('');
  // const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  //  클릭 이벤트
  // const handleSearchClick = () => {
  //   setSearchParams({ query: searchValue });
  //   navigate('/search'); // '/search' 경로로 이동
  // };
  return (
    <Container>
      <SearchInput value={searchValue} onChange={handleInputChange} />
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

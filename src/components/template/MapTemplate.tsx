import { useState } from 'react';
import styled from '@emotion/styled';
import SearchInput from '../atom/SearchInput';
import NaverMap from '../atom/NaverMap';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';
// import { useNavigate, useSearchParams } from 'react-router-dom';
const MapTemplate = () => {
  const [searchValue, setSearchValue] = useState('');
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const q = searchParams.get('q');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  // //  클릭 이벤트
  // const handleSearchClick = () => {
  //   navigate(`/map?q=${searchValue}}`); // '/list' 경로로 이동
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

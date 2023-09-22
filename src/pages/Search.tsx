import GoBackMolecule from '../components/molecule/GoBackMolecule';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import ThumbnailMolecule from '../components/molecule/ThumbnailMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';

const Search = () => {
  return (
    <>
      <HeaderMolecule />
      <GoBackMolecule />
      <SearchInputMolecule />
      <PopularKeywordOrganism />
      <ThumbnailMolecule />
    </>
  );
};

export default Search;

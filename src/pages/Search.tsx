import GoBackMolecule from '../components/molecule/GoBackMolecule';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import PopularWordMolecule from '../components/molecule/PopularWordMolecule';
import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';

const Search = () => {
  return (
    <>
      <HeaderMolecule />
      <GoBackMolecule />
      <SearchInputMolecule />
      <PopularKeywordOrganism />
    </>
  );
};

export default Search;

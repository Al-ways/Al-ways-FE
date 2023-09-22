import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import SortTextMolecule from '../components/molecule/SortTextMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';
import ThumbnailOrganism from '../components/organism/ThumbnailOrganism';

const Search = () => {
  return (
    <>
      <SearchInputMolecule />
      <SortTextMolecule />
      <PopularKeywordOrganism />
      <ThumbnailOrganism />
    </>
  );
};

export default Search;

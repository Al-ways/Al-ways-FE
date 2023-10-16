import SearchInputMolecule from '../molecule/SearchInputMolecule';
import SortTextMolecule from '../molecule/SortTextMolecule';
import PopularKeywordOrganism from '../organism/PopularKeywordOrganism';
import ThumbnailOrganism from '../organism/ThumbnailOrganism';

const SearchTemplate = () => {
  return (
    <>
      <SearchInputMolecule />
      {/* <SortTextMolecule /> */}
      <PopularKeywordOrganism />
      {/* <ThumbnailOrganism /> */}
    </>
  );
};

export default SearchTemplate;

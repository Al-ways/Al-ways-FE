import GoBackMolecule from '../components/molecule/GoBackMolecule';
import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import SortTextMolecule from '../components/molecule/SortTextMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';
import ThumbnailContainerOrganism from '../components/organism/ThumbnailContainerOrganism';

const Search = () => {
  return (
    <>
      <SearchInputMolecule />
      <SortTextMolecule />
      <PopularKeywordOrganism />
      <ThumbnailContainerOrganism />
    </>
  );
};

export default Search;

import GoBackMolecule from '../components/molecule/GoBackMolecule';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import SortTextMolecule from '../components/molecule/SortTextMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';
import ThumbnailContainerOrganism from '../components/organism/ThumbnailContainerOrganism';

const Search = () => {
  return (
    <>
      <HeaderMolecule />
      <GoBackMolecule />
      <SearchInputMolecule />
      <SortTextMolecule />
      <PopularKeywordOrganism />
      <ThumbnailContainerOrganism />
    </>
  );
};

export default Search;

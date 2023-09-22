import GoBackMolecule from '../components/molecule/GoBackMolecule';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SearchInputMolecule from '../components/molecule/SearchInputMolecule';
import ThumbnailMolecule from '../components/molecule/ThumbnailMolecule';
import PopularKeywordOrganism from '../components/organism/PopularKeywordOrganism';
import ThumbnailContainerOrganism from '../components/organism/ThumbnailContainerOrganism';

const Search = () => {
  return (
    <>
      <HeaderMolecule />
      <GoBackMolecule />
      <SearchInputMolecule />
      <PopularKeywordOrganism />
      {/* <ThumbnailMolecule /> */}
      <ThumbnailContainerOrganism />
    </>
  );
};

export default Search;

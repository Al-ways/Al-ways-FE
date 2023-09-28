import MySortedMolecule from '../molecule/MySortedMolecule';
import MySelectOrganism from '../organism/MySelectOrganism';
import ThumbnailOrganism from '../organism/ThumbnailOrganism';

const WishlistTemplate = () => {
  return (
    <>
      <MySelectOrganism />
      <MySortedMolecule />
      <ThumbnailOrganism />
    </>
  );
};

export default WishlistTemplate;

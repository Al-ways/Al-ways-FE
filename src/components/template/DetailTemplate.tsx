import BreakLineImage from '../atom/BreakLineImage';
import BarDetailOrganism from '../organism/BarDetailOrganism';
import CommentOrganism from '../organism/CommentOrganism';

const DetailTemplate = () => {
  return (
    <>
      <BarDetailOrganism />
      <BreakLineImage width={'480'} height={'10'} mb={'30'} />
      <CommentOrganism />
    </>
  );
};

export default DetailTemplate;

import BreakLine from '../atom/BreakLine';
import BarDetailOrganism from '../organism/BarDetailOrganism';
import CommentOrganism from '../organism/CommentOrganism';

const DetailTemplate = () => {
  return (
    <>
      <BarDetailOrganism />
      <BreakLine width={'480'} height={'10'} mb={'30'} />
      <CommentOrganism />
    </>
  );
};

export default DetailTemplate;

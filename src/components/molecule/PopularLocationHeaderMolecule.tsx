import styled from '@emotion/styled';
import Text from '../atom/Text';
import LocationIcon from '../atom/LocationIcon';

const PopularLocationHeaderMolecule = () => {
  return (
    <PopularLocationHeader>
      <Text mr={'20'} txt={'이번 주 인기 술집'} />
      <IconTitle>
        <LocationIcon />
        <Text txt={'강남구'} />
      </IconTitle>
    </PopularLocationHeader>
  );
};

export default PopularLocationHeaderMolecule;

const PopularLocationHeader = styled.div`
  width: 440px;
  height: 24px;
  font-size: 24px;
  margin-bottom: 20px;

  display: flex;
`;

const IconTitle = styled.div`
  display: flex;
`;

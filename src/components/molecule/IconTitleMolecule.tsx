import styled from '@emotion/styled';
import LocationIcon from '../atom/LocationIcon';
import Text from '../atom/Text';

const IconTitleMolecule = () => {
  return (
    <IconTitle>
      <LocationIcon />
      <Text width={'24'} height={'24'} />
    </IconTitle>
  );
};

export default IconTitleMolecule;

const IconTitle = styled.div`
  display: flex;
`;

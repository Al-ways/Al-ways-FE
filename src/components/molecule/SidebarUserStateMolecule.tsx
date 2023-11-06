import styled from '@emotion/styled';
import Text from '../atom/Text';
import ProfileImage from '../atom/ProfileImage';

const SidebarUserStateMolecule = () => {
  return (
    <>
      <Wrapper>
        <ProfileImage />
        <Text
          width={'220'}
          height={'40'}
          fonts={'20'}
          fontw={'400'}
          txt={'닉네임'}
        />
      </Wrapper>
    </>
  );
};

export default SidebarUserStateMolecule;

const Wrapper = styled.div`
  width: 320px;
  height: 40px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
`;

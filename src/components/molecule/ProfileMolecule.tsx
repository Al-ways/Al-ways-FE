import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Img from '../atom/Img';
import defaultImage from '../../assets/icons/default-image.png';
import Text from '../atom/Text';

const ProfileMolecule = () => {
  return (
    <ProfileContainer>
      <UserInfo>
        <ImageWrapper>
          <Img
            src={defaultImage}
            width={'90'}
            height={'90'}
            mt={'20'}
            ml={'20'}
          />
        </ImageWrapper>
        <TextWrapper>
          <Text
            width={'190'}
            height={'28'}
            fonts={'28'}
            mt={'20'}
            txt={'nickname'}
          />
          <Text
            width={'190'}
            height={'20'}
            fonts={'20'}
            mt={'10'}
            txt={'가나다라마가나다라마가나다라마가나다라마가나다라마가나다라마'}
          />
        </TextWrapper>
      </UserInfo>
      <ButtonWrapper>
        <Text
          width={'80'}
          height={'40'}
          br={'10'}
          mt={'25'}
          align={'center'}
          bgc={COLORS.gray}
          color={COLORS.black}
          txt={'프로필 관리'}
        />
        <Text
          width={'80'}
          height={'40'}
          br={'10'}
          mb={'20'}
          mt={'20'}
          align={'center'}
          bgc={COLORS.gray}
          color={COLORS.black}
          txt={'성향 테스트'}
        />
      </ButtonWrapper>
    </ProfileContainer>
  );
};

export default ProfileMolecule;

const ProfileContainer = styled.div`
  width: 440px;
  height: 150px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  background-color: ${COLORS.main};
`;

const UserInfo = styled.div`
  width: 320px;
  height: 150px;

  display: flex;
`;
const ImageWrapper = styled.div`
  width: 130px;
  height: 150px;
`;
const TextWrapper = styled.div`
  width: 190px;
  height: 150px;
`;
const ButtonWrapper = styled.div`
  width: 120px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

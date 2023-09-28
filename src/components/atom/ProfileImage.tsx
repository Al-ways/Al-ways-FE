import { useState } from 'react';
import styled from '@emotion/styled';
import profileImages from '../../assets/icons/default-image.png';

interface ProfileImageProps {
  imgUrl?: string;
}

const ProfileImage = ({ imgUrl }: ProfileImageProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <Profile imgUrl={imgUrl} isLoggedIn={isLoggedIn}></Profile>;
};

export default ProfileImage;

const Profile = styled.div<{
  imgUrl?: string;
  isLoggedIn?: boolean;
}>`
  width: 40x;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;

  cursor: pointer;
  ${(props) => `
  background-image: url(${props.isLoggedIn ? props.imgUrl : profileImages});
 `}
  background-position: cover;
`;

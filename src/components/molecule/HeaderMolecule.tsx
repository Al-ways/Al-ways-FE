import { useState } from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../atom/LogoIcon';
import MenuIconButton from '../atom/MenuIconButton';
import ProfileImage from '../atom/ProfileImage';
import LoginImage from '../atom/LoginImage';

const HeaderMolecule = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loginModalState, setLoginModalState] = useState<boolean>(false);
  return (
    <Header>
      <MenuIconButton state={menuState} setState={setMenuState} />
      <LogoIcon />
      {isLogin ? (
        <ProfileImage imgUrl={'1'} />
      ) : (
        <LoginImage setModalState={setLoginModalState} />
      )}
    </Header>
  );
};

export default HeaderMolecule;

const Header = styled.div`
  width: 480px;
  height: 80px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

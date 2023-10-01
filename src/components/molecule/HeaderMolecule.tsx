import { useState } from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../atom/LogoIcon';
import MenuIconButton from '../atom/MenuIconButton';
import LoginImage from '../atom/LoginImage';

interface HeaderProps {
  toggleMenu: () => void;
}

const HeaderMolecule = ({ toggleMenu }: HeaderProps) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      <Header>
        <MenuIconButton onClick={toggleMenu} />
        <LogoIcon />
        <LoginImage />
      </Header>
      {/* {isMenuOpen && (
        <SidebarWrapper onClick={toggleMenu}>
          <Sidebar isOpen={isMenuOpen}>
            <CloseButton onClick={toggleMenu}>X</CloseButton>
            <MenuItem>Home</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </Sidebar>
        </SidebarWrapper>
      )} */}
    </>
  );
};

export default HeaderMolecule;

const Header = styled.div`
  width: 480px;
  height: 70px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

import { useState } from 'react';
import styled from '@emotion/styled';
import Logo from '../atom/Logo';
import DrawerMenu from '../atom/DrawerMenu';
import Login from '../atom/Login';
import { COLORS } from '../../share/colors';

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
        <DrawerMenu onClick={toggleMenu} />
        <Logo />
        <Login />
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
  z-index: 1;

  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.black};
`;

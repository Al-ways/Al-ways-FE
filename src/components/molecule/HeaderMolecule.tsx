import { useState } from 'react';
import styled from '@emotion/styled';
import LogoIcon from '../atom/LogoIcon';
import MenuIconButton from '../atom/MenuIconButton';
import { COLORS } from '../../share/colors';
import LoginImage from '../atom/LoginImage';

interface SidebarProps {
  isOpen: boolean;
}

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

const SidebarWrapper = styled.div`
  width: 480px;
  height: 909px;
  z-index: 1;

  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Sidebar = styled.div<SidebarProps>`
  width: 320px;
  height: 909px;
  z-index: 1;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  position: fixed;
  background-color: ${COLORS.black};

  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-out;
`;

const MenuItem = styled.div`
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  color: ${COLORS.white};
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

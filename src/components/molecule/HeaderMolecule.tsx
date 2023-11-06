import styled from '@emotion/styled';
import Logo from '../atom/Logo';
import DrawerMenu from '../atom/DrawerMenu';
import Login from '../atom/Login';
import { COLORS } from '../../share/colors';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/reducers/sidebarSlice';

const HeaderMolecule = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header>
        <DrawerMenu onClick={() => dispatch(toggleSidebar())} />
        <Logo />
        <Login />
      </Header>
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

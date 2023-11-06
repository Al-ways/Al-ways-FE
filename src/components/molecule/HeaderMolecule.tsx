import styled from '@emotion/styled';
import Logo from '../atom/Logo';
import DrawerMenu from '../atom/DrawerMenu';
import Login from '../atom/Login';
import { COLORS } from '../../share/colors';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/reducers/sidebarSlice';
import { useIsLogin } from '../../hooks/useIsLogin';

interface HeaderProps {
  toggleMenu: () => void;
}

const HeaderMolecule = () => {
  const dispatch = useDispatch();

const HeaderMolecule = ({ toggleMenu }: HeaderProps) => {
  const { isLogin, setIsLogin } = useIsLogin();

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };
  
  return (
    <>
      <Header>
        <DrawerMenu onClick={() => dispatch(toggleSidebar())} />
        <Logo />
        {isLogin ? <button onClick={logout}>로그아웃</button> : <Login />}
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

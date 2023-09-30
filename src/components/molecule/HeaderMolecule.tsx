import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/modules/menuSlice';
import styled from '@emotion/styled';
import LogoIcon from '../atom/LogoIcon';
import MenuIconButton from '../atom/MenuIconButton';
import ProfileImage from '../atom/ProfileImage';
import LoginImage from '../atom/LoginImage';
import { RootState } from '../../redux/store/configureStore';
import { COLORS } from '../../share/colors';

const HeaderMolecule = () => {
  // useSelector hook을 이용한 store에 저장된 state 가져오기.
  // useDispatch hook을 사용해 변경할 값을 reducer에 전달
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <>
      <Header>
        <MenuIconButton toggleMenu={() => dispatch(toggleMenu())} />
        <LogoIcon />
        {isLogin ? <ProfileImage imgUrl={'1'} /> : <LoginImage />}
      </Header>
      {isMenuOpen && <Sidebar></Sidebar>}
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

const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  top: 0;
  left: 0;

  position: fixed;
  background-color: ${COLORS.main};
  color: ${COLORS.white};
`;

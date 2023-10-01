import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../share/colors';
import CloseIcon from '../atom/CloseIcon';
import BreakLineImage from '../atom/BreakLineImage';
import Text from '../atom/Text';
import SidebarMenuMolecule from '../molecule/SidebarMenuMolecule';
import SidebarUserStateMolecule from '../molecule/SidebarUserStateMolecule';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  toggleMenu?: () => void;
  isMenuOpen: boolean;
}

const SidebarOrganism = ({ toggleMenu, isMenuOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <SidebarWrapper onClick={toggleMenu}>
      <Sidebar isMenuOpen={isMenuOpen} onClick={handleSidebarClick}>
        <CloseIcon toggleMenu={toggleMenu} />
        <SidebarUserStateMolecule />
        <BreakLineImage width={'280'} height={'5'} mb={'30'} />
        <SidebarMenuMolecule
          txt={'검색'}
          onClick={() => {
            navigate('/search');
            if (toggleMenu) toggleMenu();
          }}
        />
        <SidebarMenuMolecule
          txt={'지도'}
          onClick={() => {
            navigate('/map');
            if (toggleMenu) toggleMenu();
          }}
        />
        <SidebarMenuMolecule
          txt={'전체 리스트'}
          onClick={() => {
            navigate('/list');
            if (toggleMenu) toggleMenu();
          }}
        />
        <SidebarMenuMolecule
          txt={'마이페이지'}
          onClick={() => {
            navigate('/my');
            if (toggleMenu) toggleMenu();
          }}
        />

        <Text
          width={'280'}
          height={'16'}
          fonts={'16'}
          bottom={'20'}
          cursor={'pointer'}
          color={COLORS.dark_gray}
          position={'absolute'}
          txt={'로그아웃'}
        />
      </Sidebar>
    </SidebarWrapper>
  );
};

export default SidebarOrganism;

const SidebarWrapper = styled.div`
  width: 480px;
  height: 909px;
  z-index: 1;

  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Sidebar = styled.div<SidebarProps>`
  width: 320px;
  height: 909px;
  align-items: center;

  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #141414;

  animation: ${(props) => (props.isMenuOpen ? slideIn : slideOut)} 0.75s
    forwards;
`;

// 사이드 바 슬라이드 효과
const slideIn = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

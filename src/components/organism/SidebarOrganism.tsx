import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../share/colors';
import CloseIcon from '../atom/CloseIcon';
import BreakLineImage from '../atom/BreakLineImage';
import Text from '../atom/Text';
import SidebarMenuMolecule from '../molecule/SidebarMenuMolecule';
import SidebarUserStateMolecule from '../molecule/SidebarUserStateMolecule';

interface SidebarProps {
  toggleMenu?: () => void;
  isMenuOpen: boolean;
}

const SidebarOrganism = ({ toggleMenu, isMenuOpen }: SidebarProps) => {
  return (
    <>
      <SidebarWrapper onClick={toggleMenu}>
        <Sidebar isMenuOpen={isMenuOpen}>
          <CloseIcon toggleMenu={toggleMenu} />
          <SidebarUserStateMolecule />
          <BreakLineImage width={'280'} height={'5'} mb={'30'} />
          <SidebarMenuMolecule txt={'검색'} />
          <SidebarMenuMolecule txt={'지도'} />
          <SidebarMenuMolecule txt={'전체 리스트'} />
          <SidebarMenuMolecule txt={'마이페이지'} />
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
    </>
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

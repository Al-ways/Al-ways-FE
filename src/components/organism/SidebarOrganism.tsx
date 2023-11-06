import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../share/colors';
import Close from '../atom/Close';
import BreakLine from '../atom/BreakLine';
import Text from '../atom/Text';
import SidebarMenuMolecule from '../molecule/SidebarMenuMolecule';
import SidebarUserStateMolecule from '../molecule/SidebarUserStateMolecule';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/reducers/sidebarSlice';

interface AnimationProps {
  animation: typeof slideIn | typeof slideOut;
}

const SidebarOrganism = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // close 시 애니메이션 동작하지 않아 상태 추가
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // SidebarWrapper or Close 클릭 시 side bar 닫기
  const handletoggleSidebar = () => {
    setIsAnimating(!isAnimating);

    // side bar를 닫을 때 setTimeOut 시간 후 sidebarWrapper를 없애주기
    if (!isAnimating) {
      setTimeout(() => {
        dispatch(toggleSidebar());
      }, 200); // 애니메이션의 지속 시간과 같게 설정하면 깜빡임 발생함
    }
  };

  // 사이드바 내부 클릭 시 상태 유지: 현자 사이드바를 벗어나지 않도록 함
  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // 사이드바 메뉴
  const menuItems = [
    { txt: '검색', route: '/search' },
    { txt: '지도', route: '/map' },
    { txt: '전체 리스트', route: '/list' },
    { txt: '마이페이지', route: '/my' },
  ];

  return (
    <SidebarWrapper onClick={handletoggleSidebar}>
      <Sidebar
        onClick={handleSidebarClick}
        animation={isAnimating ? slideOut : slideIn}
      >
        <Close handletoggleSidebar={handletoggleSidebar} />
        <SidebarUserStateMolecule />
        <BreakLine width={'280'} height={'5'} mb={'30'} />
        {menuItems.map((item, index) => (
          <SidebarMenuMolecule
            key={index}
            txt={item.txt}
            onClick={() => {
              navigate(item.route);
              // 라우터 이동 시 사이드바 닫히게
              if (handletoggleSidebar) handletoggleSidebar();
            }}
          />
        ))}
        <Text
          width={'280'}
          height={'16'}
          fonts={'16'}
          fontw={'700'}
          bottom={'20'}
          cursor={'pointer'}
          color={COLORS.gray}
          position={'absolute'}
          txt={'로그아웃'}
        />
      </Sidebar>
    </SidebarWrapper>
  );
};

export default SidebarOrganism;

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;

  position: absolute; // 수정된 부분
  right: 0; // 추가된 부분
  top: 0; // 추가된 부분
  background-color: rgba(0, 0, 0, 0.5);
`;

const Sidebar = styled.div<AnimationProps>`
  width: 320px;
  height: 100%;

  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #141414;

  animation: ${(props) => props.animation} 0.25s ease-out;
`;

// 사이드 바 슬라이드 효과
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
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
    transform: translateX(-100%);
  }
`;

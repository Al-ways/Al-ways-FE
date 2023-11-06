import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyles from './share/globalStyles';
import Router from './routes/Router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

interface LayoutProps {
  isSidebarOpen: boolean;
}

interface RootState {
  sidebar: {
    isOpen: boolean;
  };
}

const App = () => {
  // 사이드바 상태
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Layout isSidebarOpen={isSidebarOpen}>
          <Router />
        </Layout>
      </Background>
    </>
  );
};

export default App;

const Background = styled.div`
  width: 85%;
  height: 100vh;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 85%;
  }
  @media (max-width: 620px) {
    width: 90%;
  }
  @media (max-width: 580px) {
    width: 95%;
  }
  @media (max-width: 520px) {
    width: 97.5%;
  }
`;

const Layout = styled.div<LayoutProps>`
  min-width: 480px;
  max-width: 100%;
  height: 909px;

  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;

  /* 스크롤 바 생성 */
  overflow-y: ${(props) => (props.isSidebarOpen ? 'hidden' : 'auto')};

  /* 스크롤 바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

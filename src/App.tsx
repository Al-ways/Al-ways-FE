import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyles from './share/globalStyles';
import Router from './routes/Router';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Layout>
          <Router />
        </Layout>
      </Background>
    </>
  );
};

export default App;

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Layout = styled.div`
  width: 480px;
  height: 909px;
  margin-right: 300px;

  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;

  /* 스크롤 바 생성 */
  overflow-y: auto;

  /* 스크롤 바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

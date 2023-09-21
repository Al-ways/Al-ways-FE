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
  /* height: 100vh; */
  /* margin: 10px 300px; */

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Layout = styled.div`
  /* width: 480px; */
  min-width: 480px;
  min-height: 909px;
  /* max-height: 909px; */
  margin: 10px 300px;

  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  display: flex;
`;

// const Layout = styled.div`
//   width: 480px;
//   min-height: 909px;
//   max-height: 909px;

//   display: flex;
//   flex-direction: column;

//   background-color: black;
//   color: white;

//   /* 스크롤 바 생성*/
//   overflow: auto;
//   /* 스크롤 바 안보이게 설정 */
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

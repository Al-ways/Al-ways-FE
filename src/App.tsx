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
  /* margin-right: 300px; */

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Layout = styled.div`
  width: 480px;
  /* min-width: 480px; */
  min-height: 909px;
  margin: 10px 300px;

  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  display: flex;
`;

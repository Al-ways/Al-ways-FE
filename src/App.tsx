import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyles from './share/globalStyles';
import Router from './routes/Router';
const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <BackgroundWrapper>
        <Layout>
          <Router />
        </Layout>
      </BackgroundWrapper>
    </>
  );
};

export default App;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  margin-right: 12.5%;
`;

const Layout = styled.div`
  width: 414px;
  height: 869px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

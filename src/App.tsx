import { Global } from '@emotion/react';
import globalStyle from './share/globalStyle';
import Router from './routes/Router';
const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};

export default App;

import { Global } from '@emotion/react';
import globalStyles from './share/globalStyles';
import Router from './routes/Router';
const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router />
    </>
  );
};

export default App;

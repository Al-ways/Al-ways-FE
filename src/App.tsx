import Router from './routes/Router';

const App = () => {
  const a = import.meta.env.VITE_PLUGIN_KEY;
  console.log(a);

  return (
    <>
      <Router />
    </>
  );
};

export default App;

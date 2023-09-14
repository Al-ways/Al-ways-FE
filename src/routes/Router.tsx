import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

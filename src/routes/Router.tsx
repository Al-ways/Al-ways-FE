import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dumytsx from './Dumytsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dumytsx />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

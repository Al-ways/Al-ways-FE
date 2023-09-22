import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Map from '../pages/Map';
import Examination from '../pages/Examination';
import Search from '../pages/Search';
import List from '../pages/List';
import Detail from '../pages/Detail';
import My from '../pages/My';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import GoBackMolecule from '../components/molecule/GoBackMolecule';

const Router = () => {
  const url = window.location.pathname;

  return (
    <BrowserRouter>
      <HeaderMolecule />
      {url == '/' ? null : <GoBackMolecule />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/map" element={<Map />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/my" element={<My />} />
        {/* <Route path="/community" element={<></>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

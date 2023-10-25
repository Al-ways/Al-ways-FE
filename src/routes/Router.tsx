import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Main from '../pages/Main';
import Map from '../pages/Map';
import Examination from '../pages/Examination';
import Search from '../pages/Search';
import List from '../pages/List';
import Detail from '../pages/Detail';
import My from '../pages/My';
import Login from '../pages/Login';
import EditProfile from '../pages/EditProfile';
import Wishlist from '../pages/Wishlist';
import Recommended from '../pages/Recommended';
import Community from '../pages/Community';
import HeaderMolecule from '../components/molecule/HeaderMolecule';
import SidebarOrganism from '../components/organism/SidebarOrganism';
import PrevMolecule from '../components/molecule/PrevMolecule';
import { useState } from 'react';
import { Divide } from 'emotion-icons/fa-solid';
import RedirectLogin from '../pages/RedirectLogin';

const Router = () => {
  const url = window.location.pathname;
  const token = localStorage.getItem('token');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <HeaderMolecule toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <SidebarOrganism toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
      {url == '/' ? null : <PrevMolecule />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/list" element={<List />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/map" element={<Map />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/my/:id" element={<My />} />
        <Route path="/my/:id/edit" element={<EditProfile />} />
        <Route path="/my/:id/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/oauth2/redirect" element={<RedirectLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

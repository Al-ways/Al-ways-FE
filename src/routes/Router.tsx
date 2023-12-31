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
import PrevMolecule from '../components/molecule/PrevMolecule';
import { useState } from 'react';
import { Divide } from 'emotion-icons/fa-solid';
import RedirectLogin from '../pages/RedirectLogin';
import ExaminationResultLoading from '../pages/ExaminationResultLoading';
import ExaminationResult from '../pages/ExaminationResult';

import SidebarOrganism from '../components/organism/SidebarOrganism';
import { useSelector } from 'react-redux';

interface RootState {
  sidebar: {
    isOpen: boolean;
  };
}

const Router = () => {
  const url = window.location.pathname;
  const token = localStorage.getItem('token');
 
    // 사이드바 상태
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <BrowserRouter>
      <HeaderMolecule />
      {isSidebarOpen && <SidebarOrganism />}
      {url == '/' ? null : <PrevMolecule />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/my/:id" element={<My />} />
        <Route path="/my/:id/edit" element={<EditProfile />} />
        <Route path="/my/:id/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/oauth2/redirect" element={<RedirectLogin />} />
        {/* 지도 Route */}
        <Route path="/map" element={<Map />} />
        {/* 설문지 Route */}
        <Route path="/examination" element={<Examination />} />
        <Route path="/result/" element={<ExaminationResultLoading />} />
        <Route path="/result/:mbti" element={<ExaminationResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

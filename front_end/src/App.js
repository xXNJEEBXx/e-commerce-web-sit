import React, { Component } from 'react';
import Global_state from './pages/components/global_state';
import PrivateProvider from './pages/components/auth/PrivateRoute';
import Menubar from './pages/Menubar';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Sigin_in from './pages/Sigin_in';
import EditPage from './pages/EditPage';
import Add_new_product from './pages/Add_new_product';
import Edit_discount from './pages/Edit_discount';
import Edit_product from './pages/Edit_product';
import Products_edit_select from './pages/Products_edit_select';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthCheck from './pages/components/auth/AuthCheck.js';



// fontawesome
import './css/fontawesome-free-5.15.1-web/css/all.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// my own
import './css/xXNJEEBXx.css';
import './css/stayle.css';
import './css/stayle-media.css';




export default function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Global_state>
          <Menubar />
          <AuthCheck />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:name" element={<Product />} />
            <Route path="/login" element={<PrivateProvider type="need to be gust" Component={Login} />} />
            <Route path="/Sigin_in" element={<PrivateProvider type="need to be gust" Component={Sigin_in} />} />
            <Route path="/Profile" element={<PrivateProvider type="need to login" Component={Profile} />} />
            <Route path="/Edit_Page" element={<PrivateProvider type="need to login" Component={EditPage} />} />
            <Route path="/Add_new_product" element={<PrivateProvider type="need to login" Component={Add_new_product} />} />
            <Route path="/product_edit/:name" element={<PrivateProvider type="need to login" Component={Edit_product} />} />
            <Route path="/product_edit_discount/:name" element={<PrivateProvider type="need to login" Component={Edit_discount} />} />
            <Route path="/Products_edit_select" element={<PrivateProvider type="need to login" Component={Products_edit_select} />} />
          </Routes>
          <Footer />
        </Global_state>
      </BrowserRouter>
    </div>
  )
}
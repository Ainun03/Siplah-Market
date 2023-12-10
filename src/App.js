import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { getProducts } from './slices/productsSlice';

// pages
import HomePage from "./pages/HomePages";
import ProductPage from "./pages/productPages";
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AuthPage from './pages/auth/AuthPage';
import AddProduct from "./pages/addProduct";

// toasr
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <ToastContainer
          position="top-center"
          autoClose={1500}
          // autoClose={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="auth" element={<AuthPage />}>
            <Route index path="login" element={<LoginPage />}/>
            <Route path='register' element={<RegisterPage />}/>
          </Route>
        <Route path="/produk" element={<ProductPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

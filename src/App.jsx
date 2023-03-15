import Home from "./pages/home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes,
  redirect
 } from 'react-router-dom'
 import { useState } from "react";
import { useSelector } from "react-redux";
 import { Navigate } from "react-router-dom";

 // admin


 import "./admin/App.css";
 import AdminHome from "./admin/pages/home/AdminHome"; 
 import UserList from "./admin/pages/userList/UserList";
 import User from "./admin/pages/user/User";
 import NewUser from "./admin/pages/newUser/NewUser";
 import AdminProductList from "./admin/pages/productList/AdminProductList";
import AdminProduct from "./admin/pages/product/AdminProduct";
 import NewProduct from "./admin/pages/newProduct/NewProduct";
 import AdminLogin from "./admin/pages/login/Login";
 import { Redirect } from "react-router-dom";
import FailedLogin from "./admin/pages/failedLogin/PageNotFound";
import PageNotFound from "./admin/pages/failedLogin/PageNotFound";




const App = () => {
 
const user =  useSelector(state=>state.user.currentUser)
const admin = useSelector((state) => state.adminUser.currentUser);
const isadmin = admin?admin.isAdmin:false;

 


return (

  <Routes>

    {/* for public */} 
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:category" element={<ProductList/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/success" element={<Success/>}/>
    
    {/* for admin */}
    <Route path="/adminLogin" element={<AdminLogin />}/>

    
    {
       isadmin && (
      <>

          <Route exact path="/adminHome" element={<AdminHome />}/>
          <Route path="/adminHome/users" element={<UserList />}/>
          <Route path="/adminHome/newUser" element={<NewUser />}/>
          <Route path="/adminHome/products" element={<AdminProductList />}/>
          <Route path="/adminHome/product/:productId" element={<AdminProduct />}/>
          <Route path="/adminHome/newproduct" element={<NewProduct />}/>
          <Route path="*" element={<PageNotFound/>} />  

      </>
    )
    
  
  }

  </Routes>

);
};

export default App;

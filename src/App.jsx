import Home from "./pages/home"
import ProductList from "./pages/ProductList";
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
 import { Suspense, lazy, useState } from "react";
import { useSelector } from "react-redux";
 import { Navigate } from "react-router-dom";

 // admin
 import "./admin/App.css";
 import UserList from "./admin/pages/userList/UserList";
 import AdminProductList from "./admin/pages/productList/AdminProductList";
import AdminProduct from "./admin/pages/product/AdminProduct";
 import NewProduct from "./admin/pages/newProduct/NewProduct";
 import AdminLogin from "./admin/pages/login/Login";
 import { Redirect } from "react-router-dom";
import FailedLogin from "./admin/pages/failedLogin/PageNotFound";
import PageNotFound from "./admin/pages/failedLogin/PageNotFound";
import Loader from "./components/Loader";


const AdminHome = lazy(()=>import("./admin/pages/home/AdminHome"));
const Product = lazy(()=>import("./pages/Product"));


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
    <Route path="/product/:id" 
          element={
            <Suspense fallback={<Loader/>}>
               <Product/>
            </Suspense>
            }
    />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/success" element={<Success/>}/>
    
    {/* for admin */}
    <Route path="/adminlogin" element={<AdminLogin />}/>

    
    {
       isadmin && (
      <>

          <Route exact 
           path="/adminhome" 
           element={
           <Suspense fallback={<Loader/>}>
             <AdminHome />
           </Suspense>
           }/>
          <Route path="/adminhome/users" element={<UserList />}/>
          <Route path="/adminhome/products" element={<AdminProductList />}/>
          <Route path="/adminhome/product/:productId" element={<AdminProduct />}/>
          <Route path="/adminhome/newproduct" element={<NewProduct />}/>
          <Route path="*" element={<PageNotFound/>} />  

      </>
    )
    
  
  }

  </Routes>

);
};

export default App;

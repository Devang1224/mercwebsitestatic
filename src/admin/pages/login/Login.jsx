import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../../../redux/apiCalls'
import styled from 'styled-components'
import  { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './login.css'
import { CircularProgress } from '@material-ui/core'
import {adminFetchingStop} from "../../../redux/adminUserRedux"

const Login = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [err,setErr] = useState("")

const dispatch = useDispatch();

const navigate = useNavigate();
const admin = useSelector((state) => state.adminUser.currentUser);
const isFetching = useSelector((state)=>state.adminUser.isFetching)
const error=useSelector((state)=>state.adminUser.error)
const isadmin = admin?admin.isAdmin:'';




const handleClick = async (e)=>{

e.preventDefault();
const res = await adminLogin(dispatch,{username,password});

setErr(res?.response.data);
dispatch(adminFetchingStop());

}

React.useEffect(()=>{
  dispatch(adminFetchingStop());
},[err])

React.useEffect(() => {
  if (isadmin) {
    navigate('/adminhome');
  }console.log(isadmin);
}, [isadmin, navigate]);





  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <h1 style={{padding:10}}>Admin</h1>
        <input type = "text" placeholder="devangmehra"  onChange={e=>setUsername(e.target.value)} 
        style={{
          padding: 10,marginBottom:20
        }}></input>
        <input type = "password" placeholder="devangmehra"  onChange={e=>setPassword(e.target.value)} 
        style={{
          padding: 10,marginBottom:20
        }}></input>

      {
        isFetching ? 
        <CircularProgress />
        :<>
         <button onClick={handleClick} disabled={isFetching}
        style={{
          padding: 10,width:100,cursor:"pointer"
        }}>Login</button>  <p style={{color: "red",padding:10}}>{err}</p>
        
         </>
      }
       

      
    </div>


  )
}

export default Login



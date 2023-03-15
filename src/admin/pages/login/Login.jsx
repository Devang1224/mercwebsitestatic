import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../../../redux/apiCalls'
import styled from 'styled-components'
import  { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const dispatch = useDispatch();

const navigate = useNavigate();
const admin = useSelector((state) => state.adminUser.currentUser);
const isadmin = admin?admin.isAdmin:'';



const error=useSelector((state)=>state.adminUser.error)



const handleClick = (e)=>{

    e.preventDefault();

    adminLogin(dispatch,{username,password});

(admin&&isadmin) && navigate("/adminHome")
    
}

const Error = styled.span`
  
color: red;
`

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <h1 style={{padding:10}}>Admin</h1>
        <input type = "text" placeholder="username" onChange={e=>setUsername(e.target.value)} 
        style={{
          padding: 10,marginBottom:20
        }}></input>
        <input type = "password" placeholder="password" onChange={e=>setPassword(e.target.value)} 
        style={{
          padding: 10,marginBottom:20
        }}></input>
        <button onClick={handleClick} 
        style={{
          padding: 10,width:100
        }}>Login</button>
         
    </div>


  )
}

export default Login



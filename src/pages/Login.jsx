import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { mobile } from '../responsive'
import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { loginAsGuest } from '../redux/userRedux'
import { useNavigate } from 'react-router-dom';





const Container = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
                                rgba(255,255,255,0.5)),
                                url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`  

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
${mobile({width:"75%"})}



`  
const Title = styled.h1`
    font-size: 25px;
    font-weight: 300;
` 
const Form = styled.form`
    display: flex;
    flex-direction: column;
` 

 const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
` 
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
      color:grey;
      cursor: not-allowed;
    }
`  



const Error = styled.span`
  
color: red;
`

const Register=styled.div`
  display: flex;
  justify-content: flex-end;
  padding:10px;
`



const Login = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [errMessage,setErrMessage] = useState("")


const dispatch = useDispatch();
const {isFetching,error} = useSelector((state)=>state.user);
const isLogin = useSelector((state)=>state.user.isLogin)
const err = useSelector((state)=>state.user.error)
  const navigate = useNavigate();


const handleClick = (e)=>{

  e.preventDefault();

login(dispatch,{username,password}).then((res)=>{
 setErrMessage(res?.response?.data)

})


}

const handleLoginAsGuest =()=>{
 dispatch(loginAsGuest())
 navigate("/")
}

  return (
       
    <Container>

     <Wrapper>

       <Title>Sign In</Title>
       <Form onSubmit={handleClick}>
         <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)} required maxLength="100"/>
         <Input type ="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required maxLength="100"/>
         <Button type='submit'>Login</Button>

         {
          err && <h4 style={{color:"red"}}>{errMessage}</h4>
         }
        </Form>

         <Register>
         <Link to={"/register"} style={{
           width: '40%',
           border:'none',
           padding: '10px 15px',
           backgroundColor: 'teal',
           color: 'white',
           cursor: 'pointer',
           marginBottom: '5px',
           textAlign:'center',
           textDecoration:'none',
           borderRadius:'5px',
           cursor:"pointer"
          }}>
               Register
         </Link>
         </Register>
       
        
      <span style={{cursor:"pointer"}} onClick={handleLoginAsGuest}>Login as Guest</span>


    </Wrapper>

</Container>

  )
}

export default Login
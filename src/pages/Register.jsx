import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState,useEffect } from 'react'
import { publicRequest } from '../requestMethod'
import { Navigate, useNavigate } from 'react-router-dom'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
                                rgba(255,255,255,0.5)),
                                url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
     
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`  

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
` 

 const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    
` 
 const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    
`  
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`  


const Register = () => {


const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] =useState("")
const [errorMessage, setErrorMessage] = useState("");
const navigate= useNavigate()


const handleClick = async(e)=>{

    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

try{

const response= await publicRequest.post('/auth/register', {
      username,
      email,
      password
    });


    navigate("/")
}
catch(err)
{
    setErrorMessage(err.message);
    return;
}


}


  return (
        
      <Container>

           <Wrapper>
 
              <Title>Create An Account</Title>

              <Form onSubmit={handleClick}>
                <Input  placeholder="name" required />
                <Input placeholder="last name" required/>
                <Input name="username" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required maxLength="100"/>
                <Input type ="email" name="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required maxLength="100"/>
                <Input name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} pattern=".{8,}" required title="8 characters minimum" maxLength="100" />
                <Input placeholder="confirm password" onChange={(e)=>setConfirmPassword(e.target.value)} required maxLength="100"/>
               
                {errorMessage && <div style={{color:'red'}}> Make Sure that your username and email are unique</div>

                }
                <Agreement>By creating an account, I consent to the processing
                     of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>

                <Button type="submit" >Create</Button>
              </Form>

           </Wrapper>

      </Container>

  )
}

export default Register
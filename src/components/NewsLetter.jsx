import { Description, Send } from '@material-ui/icons'
import styled from 'styled-components'
import React, { useRef } from 'react';
import { mobile, mobile2, tablet } from '../responsive'


const Container=styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  ${tablet({height:`40vh`})}
${mobile2({height:"25vh"})}

  

`
const Title=styled.h1`
font-size: 70px;
margin-bottom: 20px;
${tablet({fontSize:"40px"})}
${mobile2({fontSize:"30px"})}




`
const Desc=styled.div`
 font-size: 24px;
 font-weight: 300;
 margin-bottom: 20px;
 ${mobile({textAlign:"center"})}
${tablet({fontSize:"20px"})}
 ${mobile2({fontSize:"15px"})}



`
const InputContainer=styled.form`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid lightgray;
${mobile({width:"80%"})}

`
const Input=styled.input`
border: none;
flex:8;
padding-left: 20px;
outline: none;
`
const Button=styled.button`

flex:1;
border:none;
background-color: teal;
color: white;
cursor: pointer;
`

const NewsLetter = () => {







  return (
      
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer> 
          <Input type="email" placeholder='Your Email'/>
          <Button>
            <Send/>
          </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
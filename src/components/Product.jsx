import { SearchOutlined, ShoppingCartOutlined,FavoriteBorderOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core'



const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;

`

const Container =styled.div`
    
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;


  
    &:hover ${Info}{      
        opacity: 1;
    }

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;

`
const Image = styled.img`
height: 75%;
z-index: 2;


`


const Product = ({item}) => {


  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const userId = currentUser?._id;
const navigate = useNavigate();


const handleClick=()=>{
navigate(`/product/${item._id}`)
}


  return (
    // <Link to={`/product/${item._id}`}>

    <Container onClick={handleClick}>
      <Circle/>
      {
        item.img?<Image src={item.img}/>:<CircularProgress/>
      }
      

      <Info>
      </Info>
    </Container>



    
  )
}

export default Product
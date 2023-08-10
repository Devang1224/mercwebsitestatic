import { SearchOutlined, ShoppingCartOutlined,FavoriteBorderOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core'
import { mobile, mobile2, mobile4 } from '../responsive'



// const Info = styled.div`
// opacity: 0;
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// background-color: rgba(0,0,0,0.2);
// z-index: 3;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: all 0.5s ease;
// cursor: pointer;

// `

const Container =styled.div`
    
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor:pointer;
   ${mobile2({width:`25vw`,maxHeight:`200px`,minWidth:`180px`})}
   ${mobile4({width:`25vw`,maxHeight:`250px`,minWidth:`150px`,margin:`2px`})}
   ${mobile({maxHeight:"150px",minWidth:"100px"})}


`

const Image = styled.img`
height: 90%;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
z-index: 2;
transform: scale(1.3);
transition: transform 0.6s ease;

&:hover{
  transform: scale(1.5);

}
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
      { 
        item.img?<Image src={item.img[0]}/>:<CircularProgress/>
      }
      

    </Container>



    
  )
}

export default Product
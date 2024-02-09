import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from  './Product'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'
import { mobile, mobile2, mobile4 } from '../responsive'

const Container =styled.div`
    padding: 20px;
     display: grid;
     grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
   ${mobile2({gridTemplateColumns:`repeat(auto-fill,minmax(170px,1fr))`,justifyItems: `center`})}
   ${mobile4({padding:`5px`,gridTemplateColumns:`repeat(auto-fill,minmax(200px,1fr))`,justifyItems: `center`})}
   ${mobile({gridTemplateColumns:`repeat(auto-fill,minmax(100px,1fr))`,justifyItems: `center`})}
    overflow-y: hidden;
`
const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

`
const Error = styled.p`
  
width:100%;
font-size:20px;
position: absolute;
text-align: center;
`







const Products = ({cat,filters,sort}) => {

const[products,setProducts] = useState([]);
const[filteredProducts,setFilteredProducts] = useState([]);
const[error,setError] = useState("")


useEffect(()=>{

  const getProducts = async ()=>{

    try{
      
       const res = await axios.get(cat ? `${process.env.REACT_APP_BASEURL}/products?category=${cat}`:
                                   `${process.env.REACT_APP_BASEURL}/products?new=true`);
     setProducts(res.data);
    }
   catch(err){
    setError(err.response.data.message);
   }

  } 
  getProducts();

},[cat,filters])

// filters

useEffect(()=>{

 setFilteredProducts(

    products?.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value))
  
     )
  
  )

},[products,cat,filters])

// sort

useEffect(()=>{

if(sort==="newest" && filteredProducts)
{
  setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.createdAt - b.createdAt)
  )
}

else if(sort === "asc")
{
  setFilteredProducts((prev)=>
     [...prev].sort((a,b)=>a.price - b.price)
  )
}

else{
   setFilteredProducts((prev)=>
     [...prev].sort((a,b)=>b.price - a.price)
  )
}



},[sort])


  return (
    <Container>
      {
      (products && products?.length === 0 && !error)
      ?
      <Loader>
        <CircularProgress /><br/>
        Loading Products...
        </Loader>
      :
      !error&&(
       cat ? filteredProducts.map((item)=>(
        <Product item={item} key={item.id}/>
       )) : filteredProducts.map((item)=>(
        <Product item={item} key={item.id}/>
       ))
      
      )
      
    }

    {error && <Error>{error}</Error>}
    </Container>
  )
}

export default Products
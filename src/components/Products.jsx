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
   ${mobile({gridTemplateColumns:`repeat(auto-fill,minmax(120px,1fr))`,justifyItems: `center`})}

   


    overflow-y: hidden;
`
const Loader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

`





const Products = ({cat,filters,sort}) => {

const[products,setProducts] = useState([]);
const[filteredProducts,setFilteredProducts] = useState([]);


useEffect(()=>{

  const getProducts = async ()=>{

    try{
      // https://mercwebsitebackend-1kn3.onrender.com
       const res = await axios.get(cat ? `https://mercwebsitebackend-1kn3.onrender.com/api/products?category=${cat}`:
                                   `https://mercwebsitebackend-1kn3.onrender.com/api/products?new=true`);

     setProducts(res.data);

    }
   catch(err){

   }

  } 
  getProducts();


},[cat,filters])

// filters

useEffect(()=>{

  cat && setFilteredProducts(

    products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value))
  
     )
  
  )

},[products,cat,filters])

// sort

useEffect(()=>{

if(sort==="newest")
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
      (products && products.length === 0)
      ?
      <Loader>
        <CircularProgress /><br/>
        Loading Products...
        </Loader>
      :
      (
       cat ? filteredProducts.map((item)=>(
        <Product item={item} key={item.id}/>
       )) : products.map((item)=>(
        <Product item={item} key={item.id}/>
       ))
      
      )
      // .slice(0,8)
      
    }
    </Container>
  )
}

export default Products
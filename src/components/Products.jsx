import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from  './Product'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'

const Container =styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    
       const res = await axios.get(cat ? `https://mercwebsitebackend-1kn3.onrender.com/api/products?category=${cat}`:
                                   `https://mercwebsitebackend-1kn3.onrender.com/api/products`);


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
console.log(products);
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
       )) : products.slice(0,8).map((item)=>(
        <Product item={item} key={item.id}/>
       ))
      
      )
      
      
    }
    </Container>
  )
}

export default Products
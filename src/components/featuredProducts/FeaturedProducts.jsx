import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { userRequest } from '../../requestMethod';
import "./featuredproducts.css"
import Product from '../Product';


const FeaturedProducts = () => {

const [featuredProducts,setFeaturedProducts] = useState([]);


const getFeaturedProducts = async()=>{
    try{
       
        const res = await userRequest.get("/products/featuredProducts");
        
        setFeaturedProducts(res.data);
         
    }
    catch(err)
    {
        console.log(err.message);
    }
}


useEffect(()=>{

getFeaturedProducts()

},[])

  return (
   <div class="featuredContainer">
    {
        featuredProducts.map((item)=>
         <Product item={item} key={item.id}/>
        )
    }

   </div>
  )
}

export default FeaturedProducts
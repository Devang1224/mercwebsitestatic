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
   <div className="featuredContainer">
    {
        featuredProducts.map((item,index)=>
         <Product item={item} key={index}/>
        )
    }

   </div>
  )
}

export default FeaturedProducts
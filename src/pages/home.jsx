import React from 'react'
import Navbar from "../components/navbar"
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Carousel from '../components/carousel/Carousel'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'





export default function home() {



  return (
    <div>
      <Announcement/>
        <Navbar/>
        <Carousel/>
        <Categories/>
        <FeaturedProducts/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

import React from 'react'
import Navbar from "../components/navbar"
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'





export default function home() {
  return (
    <div>
      <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

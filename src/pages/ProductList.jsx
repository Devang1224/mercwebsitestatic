import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile, mobile2, mobile3, mobile5 } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
text-transform: uppercase;
font-weight:100;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

`
const Filter = styled.div`
margin: 20px;
${mobile3({margin:"0px 20px",display:"flex",flexDirection:"column"})}

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})}
${mobile2({margin:"0px",fontSize:"15px"})}
${mobile5({fontSize:"10px"})}



`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile3({margin:"10px 5px",height: `30px`,fontSize:"10px",border:`none`})}

`
const SelectContainer = styled.div`
  min-width: 200px;
`

const Option = styled.option`
    
`


const ProductList = () => {

const location = useLocation(); 
const cat = location.pathname.split("/")[2];
const [filter,setFilters] = useState({})
const [sort,setSort] = useState("newest")


const handleFilters = (e)=>{

  const value = e.target.value;
  setFilters({
    ...filter,
    [e.target.name]: value
  })

}
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
       
    <Container>
      <Navbar/> 
      <Announcement/> 
       
       <Title>{cat}</Title>
       <FilterContainer>
          <Filter>
              <FilterText>Filter Products:</FilterText>
              <SelectContainer>
              <Select name = "color" onChange={handleFilters}>
                <Option disabled selected>color</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
              </Select>
              <Select name = "size" onChange={handleFilters}>
                <Option disabled selected>size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </SelectContainer>
          </Filter>
          <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select onChange = {e=>setSort(e.target.value)}>
                <Option value="newest" selected>Newest</Option>
                <Option value="asc" >Price (asc)</Option>
                <Option value="desc" >Price (desc)</Option>
              </Select>
          </Filter>
       </FilterContainer>
         <Products cat={cat} filters = {filter} sort={sort}/>
       <Newsletter/>
       <Footer/>
    </Container>

  )
}

export default ProductList
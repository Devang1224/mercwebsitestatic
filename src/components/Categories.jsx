import React from 'react'
import styled from "styled-components"
import {categories} from "../data"
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'

const Container = styled.div`
 box-sizing: border-box;
 display: flex;
 width:100%;
 justify-content: space-between;
${mobile({padding:"0",flexDirection:"column"})}



`


const Categories = () => {
  return (
    <Container>
        
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}

    </Container>
  )
}

export default Categories
import React from 'react'
import styled from 'styled-components'
import { mobile,mobile2,tablet1  } from '../responsive'
import { Link } from 'react-router-dom'


const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
${mobile({
  // height:"20vh"
flex:1

  })}
transition: all 0.5s ease;



`

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;



&:hover ${Image}{
  transform: scale(1.1);
  
}


overflow: hidden;


`



const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const Title = styled.h1`
text-align: center;
color:white;
margin-bottom: 20px;
font-weight: 400;
${tablet1({
fontSize:20

  })}

${mobile2({
fontSize:15

  })}

${mobile({
fontSize:30

})}

`

const Button = styled.button`
 border:none;
 padding:10px;
 background-color: white;
 color:grey;
 cursor:pointer;
 font-weight: 600;

 border-radius: 5px;
 /* position: relative;
overflow: hidden; */
/* z-index: 1; */


 /* &::before{
content: "";
position: absolute;
left:0;
top:0;
right:0;
bottom: 0;
background-color: red;
z-index: -1;
transform: scaleX(0);
 } */



`


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
       <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
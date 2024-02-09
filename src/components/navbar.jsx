import React, { useState } from 'react'
import styled from 'styled-components'
import {Badge} from "@material-ui/core"
import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import {mobile, mobile2} from '../responsive' 
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {logout}  from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom';


//styled components
const Container = styled.div`
height: 60px;
${mobile({height:"50px"})};
overflow-y: hidden;

`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px" })}

`

//left
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor:pointer;

${mobile({display:"none"})}


`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 5px;
padding: 5px;

`
const Input = styled.input`
  border: none;
  outline:none;
${mobile({width:"50px"})}
${mobile2({width:"50px"})};

  
`

//left

//center
const Center = styled.div`
flex: 1;
text-align: center;
${mobile({display:`flex`,justifyContent:"center"})}

`
const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
${mobile({fontSize:"24px"})}
${mobile2({fontSize:"24px"})}


`

//center

//right
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:"1",marginRight:"10px"})}

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px" , marginLeft:"10px"})}

`
//right




export default function Navbar() {



const user =  useSelector(state=>state.user.currentUser)
const dispatch = useDispatch()
const quantity = useSelector(state=>state.cart.quantity)
const isLogin = useSelector((state)=>state.user.isLogin)
const [search,setSearch] = useState("")
const navigate = useNavigate();

const handleClick = ()=>{
    logout(dispatch)
}

const handleChange =()=>{
  navigate(`/products/${search}`)
}

  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                   <Input placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
                   <Search style={{color:"gray", fontSize: 16,cursor:"pointer"}} onClick={handleChange}/>
                </SearchContainer>
            </Left>
            <Center>
              <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>
                <Logo>
                    FashFlix
                </Logo>
               </Link>
            </Center>
            <Right>
              
             { isLogin?(<MenuItem onClick={handleClick}>LogOut</MenuItem>)
             :
             (<Link to={"/login"} style={{textDecoration:'none',color:'black'}}>
                <MenuItem>Sign In</MenuItem>
              </Link>)
             }
             

              <Link to={"/cart"}>
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined style={{ textDecoration: 'none', color:'black' }}/>
                  </Badge>
                </MenuItem>
              </Link>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

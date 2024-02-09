import { Instagram, Pinterest, Twitter ,Facebook, MailOutline ,Room,Phone } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile,mobile2,mobile3,tablet} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}


`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile3({fontSize:`10px`})}

`

const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    ${mobile3({width:"30px",height:"30px"})}
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

//CENTER

const Center = styled.div`
    flex:1;
    padding: 20px;
${mobile({display:"none"})}
${mobile2({display:"none"})}


    
`
const Title=styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
${tablet({fontSize:12})}
   
`

//RIGHT

const Right = styled.div`
    flex:1;
    padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
    ${mobile3({fontSize:`10px`})}

    
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment= styled.img`
    width: 50%;
`

const AdminButton = styled.button`
    background-color: white;
    border-radius: 5px;
`


const Footer = () => {
  return (
      <Container>

        <Left>

          <Logo>FashFlix</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita inventore aspernatur voluptates ducimus architecto corporis 
                cum nostrum sunt magnam quae, nobis labore aliquid eos amet hic unde est,
                nihil culpa.
          </Desc>
          <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E60023'>
                <Pinterest/>
            </SocialIcon>
          </SocialContainer>
        
        </Left>

        <Center>
            
            <Title>Useful Links</Title>
            <List>
              <ListItems>Home</ListItems>
              <ListItems>Cart</ListItems>
              <ListItems>Man Fashion</ListItems>
              <ListItems>Woman Fashion</ListItems>
              <ListItems>Accessories</ListItems>
              <ListItems>My Account</ListItems>
              <ListItems>Order Tracking</ListItems>
              <ListItems>Wishlist</ListItems>
              <ListItems>Wishlist</ListItems>
              <ListItems>Terms</ListItems>
            </List>
           
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>234 E 1st St Casper Wyoming 82601 United States
            </ContactItem>
            <ContactItem>
              <Phone style={{marginRight:"10px"}}/>  +91 7837654658
            </ContactItem>
            <ContactItem>
              <MailOutline style={{marginRight:"10px"}}/>contact@xyz.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right>

      </Container>
  )
}

export default Footer
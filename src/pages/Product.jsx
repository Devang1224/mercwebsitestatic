import styled from 'styled-components'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Remove,Add } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column" , padding:"10px"})}

`
const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
${mobile({height:"40vh"})}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
${mobile({padding:"10px"})}

`

const Title = styled.h1`
    font-weight: 100;
`
const Desc = styled.p`
    margin: 20px 0px;

`

const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
${mobile({width:"100%"})}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``



const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
${mobile({width:"100%"})}


`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0px 5px;
    
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }

    
`


const Product = () => {

    const location = useLocation(); 
    const id = location.pathname.split("/")[2];
    const [products,setProducts] = useState({})
    const [quantity,setQuantity] = useState(1)
    const [color,setColor]=useState("")
    const [size,setSize]=useState("M")
    const dispatch = useDispatch()
     const isLogined = useSelector((state)=>state.user.isLogin)
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

 useEffect(()=>{

    const getProduct = async ()=>{

        try{
            const res = await publicRequest.get("/products/find/"+id)
            setProducts(res.data)
        }
        catch(err){

        }
    }
getProduct();


 },[id])
 

const handleQuantity = (type)=>{
    if(type==="dec")
    { 
        quantity>1 && setQuantity(quantity-1)
    }
    else{
        setQuantity(quantity+1)
    }
}

const handleClick=()=>{
    //update cart

if(!isLogined){
    navigate("/login");
    return;
}

    {size=="" && setSize(products.size[0])}


 dispatch(

    addProduct({...products,quantity,color,size})

  )
}

const handleChange=(e)=>{

setSize(e.target.value)


}
  return (

    <Container>
      <Navbar/>  
      <Announcement/>
        
        <Wrapper>
            <ImgContainer>
                <Image src={products.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{products.title}</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quod cumque eveniet dolorem porro. At eveniet id ex odit obcaecati cupiditate. 
                     Aliquid sit ullam minus! Id provident corrupti enim. Minima, magnam.</Desc>
                <Price>${products.price}</Price>


                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color :</FilterTitle>

                       {products.color?.map((c)=>(
                         <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                       ))}

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={handleChange}>
                            {products.size?.map((size)=><FilterSizeOption key={size}>{size}</FilterSizeOption>)}
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                         <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to cart</Button>
                </AddContainer>
            
            </InfoContainer>

        </Wrapper>

     <NewsLetter/>
    <Footer/>
    
    </Container>
  )
}

export default Product
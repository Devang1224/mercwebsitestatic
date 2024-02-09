import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { mobile, tablet1, mobile2 } from "../responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
  overflow-y: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  text-align: center;
  ${tablet1({
    padding: 0,
    flex: 1.5,
  })}
`;
const Image = styled.img`
  max-width: 110%;
  height: auto;
  background-repeat: none;
  background-position: center;
  background-size: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  width: 100%;
  ${tablet1({
    padding: 0,
  })}
`;

const Title = styled.h1`
  padding-right: 10px;
  font-size: 70px;
  ${tablet1({
    fontSize: 50,
  })}
  ${mobile2({
    fontSize: 30,
  })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet1({
    paddingLeft: 10,
    paddingRight: 40,
    fontSize: 15,
  })}

  ${mobile2({
    fontSize: 10,
  })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;

  ${tablet1({
    fontSize: 15,
  })}

  ${mobile2({
    fontSize: 10,
  })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direc) => {
    if (direc === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key="item.item">
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

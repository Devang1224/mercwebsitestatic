import React from "react";
import styled from "styled-components";
import { mobile3, tablet1, mobile2, tablet3 } from "../../responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import { sliderItems } from "../../data";
import { useNavigate } from "react-router-dom";

import "./carousel.css";
import {
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8,
} from "./brandsLogos";

const Container = styled.div`
  height: 89.1vh;
  display: flex;
  overflow: hidden;
  ${mobile2({
    height: `70vh;`,
  })}
  ${mobile3({
    height: `73vh;`,
  })}
  

  overflow-y: hidden;
`;

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper custom_swiper"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide className="single_swiper" key={index}>
              <div>
                <img src={item.img} />
                <div>
                  <h1>{item.desc}</h1>
                  <button className="cta" onClick={() => navigate("/products")}>
                    <span className="hover-underline-animation">
                      {" "}
                      Shop now{" "}
                    </span>
                    <svg
                      viewBox="0 0 46 16"
                      height="10"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow-horizontal"
                    >
                      <path
                        transform="translate(30)"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        data-name="Path 10"
                        id="Path_10"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <div className="brands_section">
        <div className="brands">
          <a href="https://www.gap.com/">
            {" "}
            <img src={brandLogo1} />
          </a>
          <a href="https://www.levi.in/">
            {" "}
            <img src={brandLogo2} />
          </a>
          <a href="https://eu.louisvuitton.com/eng-e1/homepage">
            {" "}
            <img src={brandLogo3} />
          </a>
          <a href="https://www.gucci.com/us/en/">
            {" "}
            <img src={brandLogo4} />
          </a>
          <a href="https://allensolly.abfrl.in/">
            {" "}
            <img src={brandLogo5} />
          </a>
          <a href="https://tommyhilfiger.nnnow.com/">
            {" "}
            <img src={brandLogo6} />
          </a>
          <a href="https://www.zara.com/in/">
            {" "}
            <img src={brandLogo7} />
          </a>
          <a href="https://www.calvinklein.us/en">
            {" "}
            <img src={brandLogo8} />
          </a>
        </div>
        <div className="brands">
          <a href="https://www.gap.com/">
            {" "}
            <img src={brandLogo1} />
          </a>
          <a href="https://www.levi.in/">
            {" "}
            <img src={brandLogo2} />
          </a>
          <a href="https://eu.louisvuitton.com/eng-e1/homepage">
            {" "}
            <img src={brandLogo3} />
          </a>
          <a href="https://www.gucci.com/us/en/">
            {" "}
            <img src={brandLogo4} />
          </a>
          <a href="https://allensolly.abfrl.in/">
            {" "}
            <img src={brandLogo5} />
          </a>
          <a href="https://tommyhilfiger.nnnow.com/">
            {" "}
            <img src={brandLogo6} />
          </a>
          <a href="https://www.zara.com/in/">
            {" "}
            <img src={brandLogo7} />
          </a>
          <a href="https://www.calvinklein.us/en">
            {" "}
            <img src={brandLogo8} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Carousel;

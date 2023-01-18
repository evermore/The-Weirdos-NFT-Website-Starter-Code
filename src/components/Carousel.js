import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/1.jpg';
import img2 from '../assets/Nfts/2.jpg';
import img3 from '../assets/Nfts/3.jpg';
import img4 from '../assets/Nfts/4.jpg';
import img5 from '../assets/Nfts/5.jpg';
import img6 from '../assets/Nfts/6.jpg';
import img7 from '../assets/Nfts/7.jpg';
import img8 from '../assets/Nfts/8.jpg';
import img9 from '../assets/Nfts/9.jpg';
import img10 from '../assets/Nfts/10.jpg';
import img11 from '../assets/Nfts/11.jpg';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 32vw;
height: 70vh;

@media (max-width:70em)
{
  height:60vh;
}

@media (max-width:64em)
{
  height:50vh;
  width:30vw;
}

@media (max-width:48em)
{
  height:50vh;
  width:40vw;
}

@media (max-width:30em)
{
  height:45vh;
  width:60vw;
}

.swiper{
    width:100%;
    height:100%;
}

.swiper-slide{
  background-color:${props => props.theme.carouselColor};
  border-radius: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 30rem;
    width: auto;
   
  }
}

.swiper-button-next{
  color:${props => props.theme.textColor};
  right: 0;
  width:4rem;
  top:60%;

  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display:none;
  }

  @media (max-width:64em)
  {
    width:3rem;
  }
  @media (max-width:30em)
  {
    width:2rem;
  }

}

.swiper-button-prev{
  color:${props => props.theme.text};
  left: 0;
  width:4rem;
  top:60%;
  transform: rotate(180deg);

  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display:none;
  }

  @media (max-width:64em)
  {
    width:3rem;
  }
  @media (max-width:30em)
  {
    width:2rem;
  }
}
`


const Carousel = () => {
  return (
    <Container>
     <Swiper
        autoplay={{
          delay:2000,
          disableOnInteraction:false,
        }}
        pagination={{
          type:'fraction'
        }}
        scrollbar={{
          draggable:true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img5} /></SwiperSlide>
        <SwiperSlide><img src={img6} /></SwiperSlide>
        <SwiperSlide><img src={img7} /></SwiperSlide>
        <SwiperSlide><img src={img8} /></SwiperSlide>
        <SwiperSlide><img src={img9} /></SwiperSlide>
        <SwiperSlide><img src={img10} /></SwiperSlide>
        <SwiperSlide><img src={img11} /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
import React from 'react'
import styled from 'styled-components'

import img2 from '../assets/Nfts/2.jpg';
import img3 from '../assets/Nfts/3.jpg';
import img4 from '../assets/Nfts/4.jpg';
import img5 from '../assets/Nfts/5.jpg';
import img6 from '../assets/Nfts/6.jpg';
import img7 from '../assets/Nfts/7.jpg';
//import Button from './Button';

const Section = styled.section`
width: 100vw;
height: 25rem;
position:relative;
border-top:2px solid ${props => props.theme.body};

background-color: ${props => `rgba(${props.theme.bodyRgba},0.9)`};

display:flex;
justify-content:center;
align-items:center;

overflow:hidden;

@media (max-width:48em)
{
    height:15rem;
    flex-direction:column;
}
`

const ImgContainer = styled.div`
width:100%;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width:15rem;
    height: auto;
}

@media (max-width:48em)
{
    img{
    width:10rem;
    height: auto;
    }

}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
padding: 1rem 2rem;
z-index: 10;
width:35%;

text-shadow: 1px 1px 2px ${props => props.theme.text};

@media (max-width:64em)
{
    text-align: center;
    font-size: ${props => props.theme.fontxxl};
    width:40%;
    text-shadow: 0px 0px 0px ${props => props.theme.text};

}
@media (max-width:48em)
{
    
    font-size: ${props => props.theme.fontxl};

    width:100%;
    padding:2rem 0;

}
`
const BtnContainer = styled.div`
width:35%;
display: flex;
justify-content: flex-end;
font-size: ${props => props.theme.fontxl};

@media (max-width:48em)
{
    width:100%;
    justify-content: center;
}
`
const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position:relative;
font-weight: 600;



&:hover{
    transform:scale(0.9);
}

&:after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3rem;
}

`

const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img2} alt="Prophecy of Conedor" />
        <img src={img3} alt="Prophecy of Conedor" />
        <img src={img4} alt="Prophecy of Conedor" />
        <img src={img5} alt="Prophecy of Conedor" />
        <img src={img6} alt="Prophecy of Conedor" />
        <img src={img7} alt="Prophecy of Conedor" />
        </ImgContainer>
        <Title>Join Prophecy <br />  of Conedor</Title>
        <BtnContainer><a href="https://opensea.io/collection/prophecy-of-conedor" target="_blank"> <Btn>Join Now</Btn> </a></BtnContainer>
    </Section>
  )
}

export default Banner
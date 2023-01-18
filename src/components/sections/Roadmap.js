import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

import DrawSvg from '../DrawSvg'

import img1 from '../../assets/conescapes.jpg';
import img2 from '../../assets/PoC.jpg';
import img3 from '../../assets/untitled.png';
import img4 from '../../assets/untitled2.png';
import img5 from '../../assets/untitled3.png';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
position: relative;


`
const Title = styled.h1`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width:fit-content;

@media (max-width:40em)
{
  font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width:70%;
height: 200vh; //420vh; //200vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display:flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width:64em)
{
  width: 80%;
  height: 300vh;
}

@media (max-width:48em)
{
  width: 90%;
}

`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//background-color: lightblue;

@media (max-width:48em)
{
  width: 90%;
}

&>*:nth-of-type(2n+1){
  justify-content: start;

  @media (max-width:48em)
{
  justify-content:center;
}

  div{
  border-radius: 50px 0 50px 0;
  text-align: right;
  @media (max-width:48em)
  {
    border-radius: 0 50px 0 50px;
    text-align: left;

    p{
      border-radius: 0 40px 0 40px;
    }
  }
  }
  p{
  border-radius: 40px 0 40px 0;


  }
}
&>*:nth-of-type(2n){
  justify-content: end;

  @media (max-width:48em)
{
  justify-content:center;
}

  div{
  border-radius: 0 50px 0 50px;
  text-align: left;



  }
  p{
  border-radius: 0 40px 0 40px;
  }

}


`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width:48em)
{
  justify-content: flex-end !important;
}

`


const ItemContainer = styled.div`
width:40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width:48em)
{
  width: 70%;
}

`
const Box = styled.div`
height:fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`
const SubTitle = styled.span`
display:block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.body};

@media (max-width:40em)
{
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`

const Text = styled.span`
display:block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.body};

font-weight: 400;
margin:0.5rem 0;
@media (max-width:40em)
{
  font-size: ${props => props.theme.fontxs};
}
`

const ImgBox = styled.div`

`

const RoadMapItem = ({title, subtext,image, addToRef}) => {

  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
          <ImgBox><img src={image} width="128" height="128" alt="Cone Louis XIV"/></ImgBox>
        </Box>
      </ItemContainer>
    </Item>
  )

}


const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el))
    {
      revealRefs.current.push(el);
    }
  }

  
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) =>
    {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y: '-30%',

          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end:'bottom center',
            scrub:true,
            //markers:true,
          }
        }
      )
    }
    
    )

  
    return () => {
      
    };
  }, [])

  return (
    <Section id ="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg/>
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRef={addToRefs} title="Prophecy of Conedor Launched!" subtext="The majority of Conedors were airdropped for free to the reddit community Coneheads members." image={img2}/>
          <RoadMapItem addToRef={addToRefs} title="Airdrop 1: Conescapes Launched!" subtext="The first airdrop to PoC holders was airdropped!" image={img1}/>
          <RoadMapItem addToRef={addToRefs} title="Airdrop 2: Untitled PFP project" subtext="The second drop to PoC holders will be a PFP project" image={img3}/>
          <RoadMapItem addToRef={addToRefs} title="Airdrop 3: TBD" subtext="This project will be determined at a later date" image={img4}/>
          <RoadMapItem addToRef={addToRefs} title="Airdrop 4+: TBD" subtext="There will be at least 4 airdrops for PoC holders, more if interest is still there! " image={img5}/>

        </Items>
      </Container>
      </Section>
  )
}

export default Roadmap
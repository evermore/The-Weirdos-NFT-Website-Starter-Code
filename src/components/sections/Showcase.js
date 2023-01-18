import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/emissary.jpg'
import img2 from '../../assets/Nfts/1.jpg'

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
position: relative;

//centers it in middle
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Box = styled.div`
width:40%;
margin: 0 auto;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
//border: 3px solid gold;
border-radius: 3rem;
margin:3rem;
padding:1rem;
background-color: ${props => props.theme.carouselColor};
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.08);

//added late
transition: all 0.2s ease;

@media (max-width: 40em)
{
  width:fit-content;
}

&:hover{
  transform: scale(1.1);
}

`

const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width:48em) {
  flex-direction: column;
  width:100%;
  &>*:first-child{
  
    margin-top: 2rem;
  }
}
`
const Title = styled.h1`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width:fit-content;
`

const SubTitle = styled.h3`

font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.body};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width:fit-content;
`

const SubSubTitle = styled.h3`

font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => props.theme.body};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
width:fit-content;
`

const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
img{
border: 2px solid goldenrod;
    border-radius: 2rem;
    
}
`



const Showcase = () => {
  return (
    <Section id="collections">
       <Title>Collections</Title>
      
      <Container>
      <Box><a href="https://opensea.io/collection/prophecy-of-conedor" target="_blank" rel="noopener noreferrer"><SubTitle>Prophecy of Conedor</SubTitle><ImageContainer><img src={img2} width="256" height ="256"/></ImageContainer></a></Box>
      <Box><a href="https://opensea.io/collection/conescapes" target="_blank" rel="noopener noreferrer"><SubTitle>Conescapes</SubTitle><ImageContainer><img src={img1} width="256" height ="256"/></ImageContainer></a></Box>
      </Container>
      <SubSubTitle>And more to come!</SubSubTitle>
    </Section>
  )
}

export default Showcase
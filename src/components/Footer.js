import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import twitterImg from '../assets/icons8-twitter.svg'
import discordImg from '../assets/discord-mark-black.svg'
import redditImg from '../assets/reddit.svg'

import coneImg from '../assets/cone.svg'
const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.text};
color: ${props => props.theme.text};
position: relative;

display:flex;
//justify-content: center;
//align-items: center;
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom:1px solid ${props => props.theme.body};

@media (max-width:48em)
{
    width: 90%;
}

`
const Left = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

@media (max-width:48em)
{
    width: 100%;
}
`

const Box = styled.div`
 display: flex;
 justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:1rem;
 img{
  height: auto;
  width:2rem;
  
 }
 transition: all 0.2s ease;


&:hover{
  transform: scale(1.3);
}


`
const IconList = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
`

const MenuItems = styled.ul`
list-style: none;
width:50%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);
grid-gap: 1rem;

color: ${props => props.theme.body};

@media (max-width:48em)
{
    display:none;
}
`

const MenuItem = styled.li`
width:fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.body};
    transition: width 0.3s ease;
}

&:hover::after{
    width: 100%;
}
`

const Bottom = styled.div`
 color:${props => props.theme.body};
 width: 75%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media (max-width:48em)
{
    flex-direction:column;
    width: 100%;
    span{
      margin-bottom:1rem;
    }
}
`

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
        behavior:'smooth',
        block: 'start',
        inline: 'nearest'

    })
}

  return (
    <Section>
      <Banner/>
      <Container>
        <Left>
          <Logo/>
          <IconList>
          <a href="https://twitter.com/neuralnetsart" target="_blank" rel="noopener noreferrer"><Box><img src={twitterImg}/></Box></a>
          <a href="https://discord.gg/3B6YjnUauB" target="_blank" rel="noopener noreferrer"><Box><img src={discordImg}/></Box></a>
           <a href="https://reddit.com/r/ProphecyOfConedor" target="_blank" rel="noopener noreferrer"><Box><img src={redditImg}/></Box></a>
          </IconList>
        </Left>
        <MenuItems>
        <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
        <MenuItem onClick={()=> scrollTo('about')}>About</MenuItem>
        <MenuItem onClick={()=> scrollTo('roadmap')}>Roadmap</MenuItem>
        <MenuItem onClick={()=> scrollTo('collections')}>Collections</MenuItem>
        <MenuItem onClick={()=> scrollTo('SM')}>Social Media</MenuItem>
        <MenuItem onClick={()=> scrollTo('FAQ')}>FAQ</MenuItem>
        </MenuItems>
        
      </Container>
      <Bottom>
          <span>
            &copy; {new Date().getFullYear()} Prophecy of Conedor
          </span>
          <span>
          <img src={coneImg} width="24" height ="24"/> A Secret Cone Society
          </span>
        </Bottom>
    </Section>
  )
}

export default Footer
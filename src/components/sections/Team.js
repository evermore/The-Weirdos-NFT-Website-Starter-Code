import React from 'react'
import styled from 'styled-components'
import twitterImg from '../../assets/icons8-twitter.svg'
import discordImg from '../../assets/discord-mark-black.svg'
import redditImg from '../../assets/reddit.svg'

const Section = styled.section`
min-height:50vh;
width: 100vw;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
position: relative;

//centers it in middle
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display:flex;
justify-content:center;
align-items:center;
margin: 1rem auto;
//border-bottom: 2px solid ${props => props.theme.text};
width:fit-content;

@media (max-width:48em)
{
    width: 90%;
    text-align: center;
    font-size: ${props => props.theme.fontxl};
}
`

const Box = styled.div`
width:40%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
//border: 3px solid gold;
border-radius: 3rem;
margin:3rem;
padding:3rem;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.body};
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.08);

transition: all 0.2s ease;


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




const Team = () => {
  return (
    <Section id="SM"><Title>Join us on Social Media!</Title>
    <Container><a href="https://twitter.com/neuralnetsart" target="_blank" rel="noopener noreferrer"><Box>Twitter<img src={twitterImg} width="128" height ="128"/></Box></a>
    <a href="https://discord.gg/3B6YjnUauB" target="_blank" rel="noopener noreferrer"><Box>Discord<img src={discordImg} width="128" height ="128"/></Box></a>
    <a href="https://reddit.com/r/ProphecyOfConedor" target="_blank" rel="noopener noreferrer"><Box>Reddit<img src={redditImg} width="128" height ="128"/></Box></a>
    </Container>
    </Section>
  )
}

export default Team
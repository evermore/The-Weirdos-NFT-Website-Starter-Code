import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const Section = styled.section`
min-height:100vh;
height:auto;
width: 100vw;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
position: relative;

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;

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

@media (max-width: 48em)
{
  font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width:64em) {
width:80%;

}
@media (max-width:48em) {
width:90%;
flex-direction: column;

&>*:last-child{
  &>:first-child{
    margin-top: 0;
  }
}
}
`

const Box = styled.div`
width: 45%;

@media (max-width:64em) {
width:90%;
align-self: center;
}
`

const Faq = () => {

  // const ref = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);
  // useLayoutEffect(() => {
    
  //   let element = ref.current;

  //   ScrollTrigger.create({
  //     trigger: element,
  //     start:'top top',
  //     end: 'bottom top',
  //     pin:true,
  //     pinSpacing:false,
  //     scrub:true
  //   })
  
  //   return () => {
      
  //   };
  // }, [])

  return (
    //add ref={ref} if you use scrol trigger
    <Section id="FAQ"><Title>FAQ</Title><Container>
    <Box>
      <Accordion title="How did Prophecy of Conedor launch?">Prophecy of Conedor was launched on /r/coneheads subreddit.  Most of them were given away for free <font color="blue"><a href="https://www.reddit.com/r/ConeHeads/comments/z4qo0j/i_will_create_you_a_free_historical_figure/" target="_blank">here.</a></font></Accordion>
      <Accordion title="What other benefits do PoC holders have besides airdrops?">PoC holders get exclusive access to upcoming airdrop design sessions, AI art collab channels, and more!</Accordion>
      <Accordion title="What will the cap on Prophecy of Conedor be?">Prophecy of Conedor itself has a cap of 250.  Other NFTs will be airdropped as separate collections to holders</Accordion>
    </Box>
    <Box>
      <Accordion title="What will be the themes of the future airdrops?">Each airdrop will be selected based on aesthetics and if they are unique compared to other AI generated artwork.  Each airdrop will have its own distinct style to separate it from other artwork that exists. Most of the collections will be unique PFPs, but occasionally we will have drops like conescapes.</Accordion>
      <Accordion title="How many airdrops will there be?">That depends on the interest.  There will be at least 4 airdrops in total.  More if there is a demand for it.</Accordion>
      <Accordion title="How are they created, are they AI art?">Yes, PoC and its airdrops are created by AI.  That doesn't take away from the collections.  Individual pieces sometimes take hours to create even with AI.  I am extremely picky about which pieces make it into the collection.  Sometimes generating thousands of images but only using 200.</Accordion>
      </Box>
    
    </Container>
    </Section>
  )
}

export default Faq
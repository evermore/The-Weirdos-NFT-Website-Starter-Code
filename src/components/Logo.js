import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
font-family: 'Sora', sans-serif;//'Akaya Telivigala'; //,cursive
font-size: ${props => props.theme.fontxl};
color: gold;//${props => props.theme.text};
transition: all 0.2s ease;


&:hover{
  transform: scale(1.1);
}

@media (max-width: 64em){
  font-size: ${props => props.theme.fontxs};
}

`


const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
        Prophecy of Conedor
      </Link> 
    </LogoText>
  )
}

export default Logo
import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/My_video.mp4'



const VideoContainer = styled.div`
width: 100%;

video {
    width: 100%;
    height: auto;
    border: 5px solid goldenrod;
    border-radius: 3rem;
}

@media (max-width:64em)
{
  min-width: 40vh;
}

`



const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo
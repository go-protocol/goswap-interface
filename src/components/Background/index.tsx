import React from 'react'
import styled from 'styled-components'

// import MountainLeft from '../../assets/background/mountain-left.png'
// import MountainRight from '../../assets/background/mountain-right.png'
// import FieldLeft from '../../assets/background/field-left.png'
// import FieldRight from '../../assets/background/field-right.png'
// import CloudMoon from '../../assets/background/cloud-moon.png'
// import CloudSun from '../../assets/background/cloud-sun.png'
import darkBg from '../../assets/background/darkBg.png'
import lightBg from'../../assets/background/lightBg.png'
// import darkBgSvg from '../../assets/background/darkBg.svg'

const BackgroundContainer = styled.div`
  z-index: -1;
  ${({ theme }) => theme.isDarkMode && 'filter: brightness(0.7);'}
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.isDarkMode ? 'background-image:url(' + darkBg + ')' : 'background-image:url(' + lightBg + ')'};
  // background-image: url(${darkBg});
  // background-size:100% 100%;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-position: bottom 100px right;

  @media (min-width: 9999.99px) and (max-height: 1079.99px) {
    background-size:cover;
    background-position: top calc(50% - (100vh * 0.410814814814815 / 2)) left,
    top calc(50% - (100vh * 0.410814814814815 / 2)) right, top center, top center, top calc(50% + 4px) center,
       bottom center;
    
  //   background-size: auto calc(100% * 0.414814814814815), auto calc(100% * 0.414814814814815),
  //     auto calc(100% * 0.425296296296296), 100% 50%, 100% 4px, 100% 50%;
  //   background-position: top calc(50% - (100vh * 0.410814814814815 / 2)) left,
  //     top calc(50% - (100vh * 0.410814814814815 / 2)) right, top center, top center, top calc(50% + 4px) center,
  //     bottom center;
  }
`

const GridWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Grid = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  width: 200vw;
  height: 150vh;
  margin-top: -75vh;
  margin-left: -100vw;
  animation: fly 3s linear;
  animation-iteration-count: infinite;
  @keyframes fly {
    0% {
      transform: perspective(300px) rotateX(80deg) translateY(0%);
    }
    100% {
      transform: perspective(300px) rotateX(80deg) translateY(50px);
    }
  }
`

export default function Background() {
  return (
    <BackgroundContainer>
      <GridWrapper>
        <Grid/>
      </GridWrapper>
    </BackgroundContainer>
  )
}

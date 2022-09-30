import React from 'react'
import { TogglTrackBottom } from './TogglTrackBottom'
import { HomepageTop } from './HomepageTop'
import { HomeTop2 } from './HomeTop2'
import { Box } from '@chakra-ui/react'
import { HomeMid3 } from './HomeMid3'
import { HomeMid2 } from './HomeMid2'
import { HomeMid1 } from './HomeMid1'
import Navbar from '../NavComponents/Navbar'
import Footer from './Footer'
 const Homepage = () => {
  return (
   <Box>
    <Navbar/>
   <HomepageTop/>
   <HomeTop2/>
   <HomeMid1/>
   <HomeMid2/>
   <HomeMid3/>
<TogglTrackBottom/>
<Footer/> 
   </Box>
  )
}
export default Homepage
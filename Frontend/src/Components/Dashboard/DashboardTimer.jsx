import { Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from '../sidebar/Sidebar'
import { Timer } from '../Timer/Timer'

export const Dashboard = () => {
  return (
    <Box display="flex">
    <SimpleSidebar/>  
    <Timer/>
    </Box>
  )
}

import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Homepage from '../Components/Homepage/Homepage'

import BookDemo from '../Components/prices/BookDemo'
import BookingConfirm from '../Components/prices/BookingConfirm'
import ChooseToggleTime from '../Components/prices/ChooseToggleTime'
import Prices from '../Components/prices/Prices'
import ToggleBook from '../Components/prices/ToggleBook'
import YourInfo from '../Components/prices/YourInfo'
import Login from '../Components/Loging/Login'
import Signupm from "../Components/Loging/Signupm"

import { Stack } from '@chakra-ui/react'
import Sidebar from "../Components/sidebar/Sidebar"
import Project from '../Components/NavComponents/Project/Project'
import Client from '../Components/NavComponents/Client/Client'
import Tag from '../Components/NavComponents/Tags/Tag'
import { Timerd } from '../Components/TimerPage/Timer'
// import TopNav from '../../Components/TimerPage/TopNav'
const Navroutes = () => {
  return (
    <div>
         {/* <Navbar/>  */}
      <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/BookingConfirm" element={<BookingConfirm/>} />
         <Route path="/BookDemo" element={<BookDemo/>} />
         <Route path="/ChooseToggleTime" element={<ChooseToggleTime/>} />
         <Route path="/YourInfo" element={<YourInfo/>} />
         <Route path="/ToggleBook" element={<ToggleBook/>} />
         <Route path="/Prices" element={<Prices/>} />
         <Route path="/login" element={<Login/>} />
         <Route path='/signup' element={<Signupm/>}/>
         {/* <Route path="/timers" element={<Sidebarroutes/>} /> */}
           <Route path="/timer" element={
            <Stack direction="row" gap="20px">
            <Sidebar/>
            <Timerd  />
           </Stack>}/>
           <Route path="/project" element={
            <Stack direction="row" gap="20px">
            <Sidebar/>  
            <Project/>
           </Stack>} />
           <Route path="/client" element={
            <Stack direction="row" gap="20px" >
            <Sidebar/>  
            <Client/>
           </Stack>
          } />
           <Route path="/tag" element={
            <Stack direction="row" gap="20px">
            <Sidebar/>
            <Tag  />
           </Stack>}/>
      </Routes>
      
  

    </div>
  )
}

export default Navroutes
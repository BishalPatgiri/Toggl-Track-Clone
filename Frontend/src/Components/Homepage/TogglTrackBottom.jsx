import React from 'react'
import { Box,Center,Container ,Text,Button, Spacer  } from '@chakra-ui/react'
import {  EmailIcon } from '@chakra-ui/icons'

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
export const TogglTrackBottom = () => {
  return (
   <Box
    // border={"3px solid red"}
    backgroundColor="#412a4c"
    h={{base:"auto",sm:"auto",md:"auto",lg:"auto",xl:"150vh","2xl":"130vh"}}
    
     w="100%"
    display={"flex"} 
    flexDirection={"column"}
    alignItems="center" 
    justifyContent={"center"}
    
    color="#fff3ed"
    >


   <Center 
   mt="60px"
    // h={{base:"auto",sm:"auto",md:"auto",lg:"auto",xl:"30vh","2xl":"30vh"}}
   w={{base:"",sm:"",md:"100%",lg:"70%",xl:"60%","2xl":"60%"}}
   fontWeight={{base:"",sm:"",md:"600",lg:"600",xl:"600","2xl":"600"}}
    // border={"1px solid black"} 
   fontSize={{base:"",sm:"",md:"30px",lg:"35px",xl:"40px","2xl":"45px"}}
   fontFamily={"sans-serif"}
   display={{base:"none",sm:"none",md:"block",lg:"block",xl:"block","2xl":"block"}}
   >
   Switch to the time tracking tool 70,000+ teams across the world swear by
   </Center>


   <Container 
   mt="60px"
   mb="60px"
  //  border={"1px solid blue"}
   boxSize="border-box"
    // h="100vh"
   maxW={{base:"100%",sm:"100%",md:"100%",lg:"80%",xl:"80%","2xl":"80%"}}
    color='white' 
   display={{base:"flex",sm:"flex",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}}
   alignItems="center"
   justifyContent={"center"}
   flexDirection={{base:"column",sm:"column",md:"column",lg:"column",xl:"row","2xl":"row"}}
   >

   <Box
  //  border={"1px solid green"}
  //  h="60vh"
   w={{base:"100%",sm:"100%",md:"70%",lg:"90%",xl:"80%","2xl":"80%"}}
   position={"relative"}
   left={{base:"0px",sm:"0px",md:"0px",lg:"0px",xl:"50px","2xl":"60px"}}
   backgroundColor={"#2c1338"}
   zIndex={"2"}
   display="flex"
   flexDirection={"column"}
   justifyContent="space-between"
   padding="35px"
   >
  <Text align={"left"}fontSize="45px" fontWeight={"500"}>Sign up for free</Text>
  <Text align={"left"} mt="20px" mb="20px" >All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</Text>
  <Box display={"flex"} mt="20px" mb="20px">
  <Button leftIcon={<FcGoogle />} fontSize={{base:"9px",sm:"15px"}}   borderRadius="50" bg="white" color="black" >
  Sign up via Google
  </Button>
  <Spacer/>
  <Button leftIcon={<FaApple />} fontSize={{base:"9px",sm:"15px"}}  borderRadius="50" bg="white" color="black" >
  Sign up via Apple
  </Button>
  
  </Box>
 
  <Button mt="10px" mb="20px"   leftIcon={<EmailIcon />} borderRadius="50" bg="white" color="black" >
  or sign up via email
  </Button>
  <Text mt="20px" mb="20px" align={"left"}>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>

   </Box>



   <Box
   padding={"50px"}
   paddingLeft={{base:"",sm:"",md:"",lg:"",xl:"150px","2xl":"150px"}}
    //  border={"1px solid green"}
    //  h="40vh"
     w={{base:"100%",sm:"100%",md:"70%",lg:"90%",xl:"80%","2xl":"80%"}}
     position={"relative"}
   right={{base:"0px",sm:"0px",md:"0px",lg:"0px",xl:"50px","2xl":"60px"}}
   zIndex={"1"}
   top={{base:"0px",sm:"0px",md:"0px",lg:"0px",xl:"200px","2xl":"200px"}}
   backgroundColor={"#fce5d8"}
   >

   <Text align={"left"}fontSize="30px" color={"black"} fontWeight={"500"}>Prefer a product demo instead?</Text>
   <Text align={"left"} color={"black"}>Teams of 10+ are eligible for a personalized demo to see how Toggl Track can meet your time tracking goals</Text>
   <Box align="left">
   <Button mt="20px" bg="pink.300" _hover={{bg:"pink.500",color:"white"}} borderRadius="50"size={"lg"}  color="black" >
   Book a demo
  </Button>
   </Box>
   </Box>



  </Container>



   </Box>
  )
}

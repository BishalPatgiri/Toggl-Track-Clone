import React, { useState } from 'react'
import { Box,Image,Input ,Container ,Text,Button, Spacer,Flex ,Highlight ,Heading, useToast} from '@chakra-ui/react'

import { FaApple } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

import Timer from './HomeUpperTimer';
import { useNavigate } from 'react-router-dom';


export const HomepageTop = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading,setIsloading] = useState(false)
  const toast = useToast()
  
 const nav =useNavigate()
  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
      setPassword(e.target.value)
  }

  const handleSubmit = async () => {
      const payload = {
          email,
          password
      }
       await fetch("https://limitless-peak-78690.herokuapp.com/signup"
       , {
          method : "POST",
          body : JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json'
            },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        //  if(res.message === "required fields are email,password")
        //  {
        //   toast({
        //     title: 'Please fill the details.',
        //     description: "Input Feilds are required .",
        //     status: 'error',
        //     duration: 1500,
        //     isClosable: true,
        //     position:"top"
        //   })
        //  }
       if (res.msg === "signup successfully")
        {
          toast({
            title: 'Account created.',
            description: "We've created your account for you. Please Login",
            status: 'success',
            duration: 2500,
            isClosable: true,
            position:"top"
          })
          setTimeout(()=>{ nav("/login",{replace:true})},1000)
        }
      })
      
     
  }

  return (
    // {{base:"",sm:"",md:"",lg:"",xl:"","2xl":""}} 

    <Box
     w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    //  h={{base:"",sm:"",md:"",lg:"",xl:"120vh","2xl":"120vh"}} 
    //  border="2px solid red"
     display={"flex"}
     bg="#2c1338"
     alignItems="center"
     justifyItems={"center"}
     mt={["10px","30px","70px","76px","50px"]}
     >
  <Container
//    h={{base:"",sm:"",md:"",lg:"",xl:"80vh","2xl":"80vh"}} 
mt="50px"
   maxW={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"85%","2xl":"85%"}} 
  //  border="2px solid black"
  >
   

     <Box
    // h={{base:"",sm:"",md:"",lg:"",xl:"20vh","2xl":"20vh"}} 
    maxW={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    // border="2px solid blue"
    mt="20px"
   >
    <Heading fontSize={{base:"20px",sm:"30px",md:"35px",lg:"40px",xl:"50px","2xl":"50px"}} align="left" color={"white"} >
   
 
  <Text>Simple time tracking to save </Text> 
 <Spacer/>
  <Highlight
  
    query={['time', 'money']}
    styles={{ px: '2', py: '1', color: '#e57cd8',fontStyle:"italic"}}
  >
   you time and money.
  </Highlight>
</Heading>

   </Box>

   <Flex
     w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    //  h={{base:"",sm:"",md:"",lg:"",xl:"70vh","2xl":"70vh"}} 
    //  border="2px solid red"
     alignItems={"center"}
     flexDirection={{base:"column",sm:"column",md:"column",lg:"column",xl:"row","2xl":"row"}} 
   >
   <Box
     w={{base:"100%",sm:"80%",md:"70%",lg:"60%",xl:"50%","2xl":"50%"}} 
    //  h={{base:"",sm:"",md:"",lg:"",xl:"70vh","2xl":"70vh"}} 
      // border="1px solid green"
     >
        <Text 
        color={"white"}
        fontSize={{base:"13px",sm:"16px",md:"20px",lg:"",xl:"","2xl":""}}
        align={"left"}
        >Bill accurately, measure profitability, manage workloads — and spend less time on it all.</Text>
        <Box align="left" mt="20px">
        <Input type="text" placeholder='Email'  value={email} onChange={handleEmailChange} mt="20px" size='lg' w="80%"  style={{border:"2px solid white",borderRadius:"0px",color:"white"}} />
         <Input type={showPassword ? 'text' : 'password'} placeholder='A strong password' value={password} onChange={handlePasswordChange}  mt="20px" size='lg'  w="80%"  style={{border:"2px solid white",borderRadius:"0px",color:"white"}}  />
        </Box>

      <Box mt="20px"  display={"flex"} flexDirection={{base:"column",sm:"column",md:"row",lg:"row",xl:"row","2xl":"row"}} gap={5} alignItems="center" >
      <Button bg="#C56FBD" color={"white"} fontSize={"90%"} size={"lg"} marginRight={"5%"} borderRadius={"50px"} _hover={{bg:"rgb(86, 66, 96)"}}  onClick={
                  ()=>{
                    setIsloading(true)
                    setTimeout(() => {
                        setIsloading(false)
                         handleSubmit()
                    },1000)
                    
                  }
                }
                isLoading={isLoading}>Sign up with email</Button>
      <Box display={"flex"} alignItems="center" gap="5">
      <Text color="white">Or sign up with:</Text>
      <Button colorScheme='' p="0px" border="1px solid white" borderRadius={"200px"} _hover={{bg:"white",color:"black"}} ><FaApple fontSize="20px" /></Button>
      <Button colorScheme='' p="0px" border="1px solid white" borderRadius={"200px"} _hover={{bg:"white",color:"black"}} ><FaGoogle fontSize="20px" /></Button>
      </Box>
      </Box>
      <Text color="white" mt={"20px"} fontSize={"13px"} align="left">By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
     </Box>

     <Box
     w={{base:"100%",sm:"80%",md:"70%",lg:"60%",xl:"50%","2xl":"50%"}} 
     h={{base:"",sm:"",md:"",lg:"",xl:"70vh","2xl":"70vh"}}
     display={{base:"none",sm:"none",md:"block",lg:"block",xl:"block","2xl":"block"}}
      // border="1px solid blue"
      
     >
      <Timer/>
     </Box>
   </Flex>

   <Box
    h={{base:"",sm:"",md:"",lg:"",xl:"20vh","2xl":"20vh"}} 
    maxW={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    // border="2px solid blue"
    mt="20px"
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
   >
  <Text color="white" fontSize={{base:"10px",sm:"13px",md:"20px",lg:"",xl:"","2xl":""}} align="left">TRUSTED BY OVER 6 MILLION USERS ACROSS 120 COUNTRIES</Text>
  <Image src="https://public-assets.toggl.com/b/static/21b44745982a70f8f66a90507e5f6ee1/ecc0b/brands-mixed-desktop-light.png"/> 
   </Box>
   </Container>
    </Box>

  )
}
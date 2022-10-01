import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
   Link,
    Center,
    VStack,
    useToast,
    Spacer,
  } from '@chakra-ui/react';
  

  import { useState } from 'react';
  import { ChevronRightIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  import { FaApple, FaGoogle} from 'react-icons/fa';
  // import { useNavigate } from 'react-router-dom';
  import { Link as Linkrouter } from 'react-router-dom';
import Navbar from '../NavComponents/Navbar';
import Footer from '../Homepage/Footer';
  // import Footer from '../Homepage/Footer';
  // import Navbar from '../NavComponents/Navbar';
  // import{UseNavigate}from"react-router-dom";
  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
   const navigate=useNavigate()
   const [isLoading,setIsloading] = useState(false)
   const toast = useToast()
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
  
      const handleEmailChange = (e) => {
          setEmail(e.target.value)
      }
      const handlePasswordChange = (e) => {
          setPassword(e.target.value)
      }

      const handleGoogle=()=>{
        alert("show me")
        window.location.assign('https://limitless-peak-78690.herokuapp.com/auth/google')
        navigate("/timer")
      
      }
  
      const handleSubmit = async () => {
          const payload = {
              email,
              password
          }
          await fetch("https://limitless-peak-78690.herokuapp.com/login", {
              method : "POST",
              body : JSON.stringify(payload),
              headers: {
                  'Content-Type': 'application/json',
                  
                },
          })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
             
              if(res.msg === "invalid credential")
           {
            toast({
              title: 'Please fill the details.',
              description: "Input Feilds are required .",
              status: 'error',
              duration: 1500,
              isClosable: true,
              position:"top"
            })
           }
           else if (res.msg === "please try again later")
          {
            
              toast({
                title: 'Login Failed.',
                description: "Please enter correct Details.",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
            
          }
       
           if(res.msg === "login successfull")
          {
            toast({
              title: 'Logged in Successfull.',
              description: "Welcome",
              status: 'success',
              duration: 2000,
              isClosable: true,
              position:"top"
            })
            localStorage.setItem("token", res.token)
            localStorage.setItem("userId", res.userId)
            localStorage.setItem("email",payload.email)
            navigate("/timer")
          }  
          })
          .catch((err) => console.log(err))
      }
      
    return (
  
  <>

   <Navbar/> 
  <Box w={"full"} >
    <Box backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)),url('https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat" bgSize="full"  h={'400px'} margin="auto"  zIndex={"-1"}>
      <Center paddingTop={"140px"}>
        <VStack>
        <Heading fontSize={["35px","45px","60px"]} color={"#fff3ed"}>Log in to your account</Heading>
        <Text color={"#fff3ed"} fontSize="20px">Let's get tracking!</Text>
        </VStack>
      </Center>
    </Box>
    <Box bgColor={"#412A4C"} width={"100%"} height={"700px"} marginTop={"-50px"} zIndex={"3"}>
  
  <Box style={{position:"relative",top:"-80px"}}  bg={"rgb(44, 19, 56)"} width={["97%","84%","60%","42%"]} color={"white"}  margin={"auto"}>
      <Stack spacing={8} mx={'auto'} py={12} px="6%" >
       <HStack w="100%" margin={"auto"} h="60px">
            <Button onClick={handleGoogle} h="100%" w={["50%","40%"]} background={"white"} color={"black"} borderRadius={"25px"} leftIcon={<FaGoogle />}>
             Login with Google
            </Button>
            <Spacer/>
            <Button h="100%" background={"white"} w={["50%","40%"]} color={"black"} borderRadius={"25px"}  leftIcon={<FaApple />}>
              Login with Apple
            </Button>
       </HStack>
       <Box
           bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
           p={3}>
           <Stack spacing={4} > 
             <FormControl border='5px' id="email" >
              <FormLabel>Email</FormLabel>
               <Input width={"100%"} h="52px" type="email" placeholder="email" value={email} onChange={handleEmailChange}  />
             </FormControl>
             <FormControl id="password" >
             <FormLabel>Password</FormLabel>
               <InputGroup>
                 <Input h="52px" type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange} />
                 <InputRightElement h={'full'}>
                   <Button 
                     variant={'ghost'}
                     onClick={() =>
                       setShowPassword((showPassword) => !showPassword)
                     }>
                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                   </Button>
                 </InputRightElement>
               </InputGroup>
             </FormControl>
             <HStack> 
              <Spacer/> 
              <Link color={'blue.400'} _hover={{
                   color: '#E57CD8',
                 }}>Forgot password?
              </Link>
             </HStack>
             <HStack spacing={4} pt={2}>
               <Button 
                 loadingText="Logging in"
                 borderRadius={"16px"}
                 size="lg"
                 width={"100%"}
                 marginRight={"6%"}
                 bg={'rgb(229, 124, 216)'}
                 color={'white'}
                
                 _hover={{
                   bg: 'rgb(86, 66, 96)',
                 }}
                 onClick={
                  ()=>{
                    setIsloading(true)
                    setTimeout(() => {
                        setIsloading(false)
                         handleSubmit()
                    },1000)
                    
                  }
                }
                 isLoading={isLoading}
                 >
                 Login
               </Button> 
             </HStack>
             <Stack pt={6}>
               <Text align={'center'} fontSize={"20px"} >
               <LockIcon/> Company login (SSO) <ChevronRightIcon/>
               </Text>
             </Stack>
           </Stack>
         </Box>
       </Stack>
    </Box> 
    <VStack spacing={4} mt="-20px">
           <Text color={"white"}>Don't you have account ?</Text>
           <Linkrouter to="/signup"><Button 
              loadingText="Submitting"
              borderRadius={"16px"}
              size="lg"
              width={"200px"}
              margin={"auto"}
              bg={'rgb(229, 124, 216)'}
              color={'white'}
              
              _hover={{
                bg: 'rgb(86, 66, 96)',
              }}>
              Signup
            </Button>
          </Linkrouter> 
    </VStack>
    </Box>
  </Box>
 <Footer/>
  </>
    );
  }
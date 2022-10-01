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
  Text,
  useColorModeValue,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle} from 'react-icons/fa';
import { useToast } from '@chakra-ui/react'

export default function Signup1() {
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

  
     <>
<Box bg={"rgb(44, 19, 56)"} color={"white"} px="10%">
  <Stack spacing={5} mx={'auto'} py={12}>
    <Stack direction={["column","column","row"]}>
      <Link href="https://limitless-peak-78690.herokuapp.com/google">
        <Button  h="50px" background={"white"} color={"black"} borderRadius={"16px"} leftIcon={<FaGoogle />}>
          Login with Google
        </Button>
      </Link>
      <Spacer/>
      <Link href="/">
        <Button h="50px"  background={"white"} color={"black"} borderRadius={"16px"}  leftIcon={<FaApple />}>
          Login with Apple
        </Button>
      </Link>
    </Stack>
     
    <Box
          rounded={'lg'}
          bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
          textAlign="center">
          <Stack spacing={4} >
            <FormControl border='5px' id="email" >
            <FormLabel>Email</FormLabel>
              <Input width={"100%"} h="50px" type="email" placeholder="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" >
            <FormLabel>Password</FormLabel>
              <InputGroup>
              
                <Input h="50px" type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange}/>
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
            <HStack spacing={4}>
           
              <Button 
                loadingText="Submitting"
                borderRadius={"16px"}
                size="lg"
                width={"95%"}
                margin="auto"
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
                Sign up
              </Button>
            </HStack>
            <Stack pt={6}>
              <Text align={'center'} fontSize={"10px"}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack> 
   </Box>
   </>
   
  );
}
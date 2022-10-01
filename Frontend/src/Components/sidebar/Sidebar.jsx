import React from 'react'
import {
  
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Text,
  useDisclosure,
  Image,
  Button,
  Spacer
  
} from '@chakra-ui/react';
import {
 
  FiFolderMinus,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import { TbReportSearch } from "react-icons/tb";
import { MdInsights } from "react-icons/md";
import { FaTag,FaQuestion, FaUserTie } from "react-icons/fa";
import { BellIcon } from '@chakra-ui/icons'
import {FaStopwatch  } from "react-icons/fa";
import{Link as RouterLink,useNavigate} from "react-router-dom";
// import axios from 'axios';
// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }

// const LinkItems = [
//   { name: 'Timer', icon: FaStopwatch},
// ];
const Anylyze=[
    { name:"Reports",icon:TbReportSearch},
    { name:"Insights",icon:MdInsights}
]
// const Manage=[
//     {name:"Projects",icon:FiFolderMinus,links:"/project"},
//     {name:"Client",icon:FiUser},
//     {name:"Team",icon:FaUserFriends},
//     {name:"Tag",icon:FaTag},
//     {name:"Help",icon:FaQuestion}
// ]

export default function SimpleSidebar({ children }) {
const email=localStorage.getItem("email")
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent display={{ base: 'none', md: 'block' }}/>
       
      {/* mobilenav */}
      {/* <MobileNav display={{ base:"flex",md: 'none' }} />
      <>
      </> */}
      </>
    // </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const email=localStorage.getItem("email")
   const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    localStorage.removeItem("userId")
     navigate("/")

  }
  const handleHome=()=>{
    navigate("/")
  }
  return (
    <Box
      bg={useColorModeValue('#2c1338')}
      border={"1px solid grey"}
      px=".5%"
      py={"20px"}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      // w="190px"
      h="full"
      w="14%"
      {...rest}>
        <Box display={"flex"} alignItems="center" px={"5%"} onClick={handleHome} cursor={"pointer"}>
          <Image  margin="auto"   h="20px" w="100px" src="https://assets.website-files.com/5f699d08507c7daf18b16e6a/61235a16de9b7eb783fe6b73_toggl-track_.png"  />
          <Spacer/>
          <BellIcon w={5} h={5} color="white"/>
        </Box>
        
        {/* Timer */}
        <Box marginTop="20px" >
          <Flex h="10px"  alignItems="center" mx="2" justifyContent="space-between">
            <Text fontSize="12px" color="#777088" fontWeight="bold" >
              TRACK
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex> 
      <RouterLink to="/timer">
      <Flex
        align="center"
        mx="2"
        p="5px"
        mt="10px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        bg= '#4F2276'
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaStopwatch}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"}>Timer</Text>
      </Flex>
      </RouterLink>
      </Box >
    {/* anaylyze */}
      
      <Box  marginTop={"20px"}>
      <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
        <Text fontSize="12px" color="#777088"  fontWeight="bold">
          ANAYLZE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {Anylyze.map((link) => (
        <NavItem  _hover={{
          bg: '#4F2276',
          color: 'white',
        }} mt="10px" padding="5px" key={link.name} link={link.links} icon={link.icon}>
         <Text  color="white" fontSize="14px" fontWeight={"400"}>{link.name}</Text> 
        </NavItem>
      ))}
      </Box>
    {/* Manage */}
    <Box   marginTop={"20px"}>
      <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
        <Text fontSize="12px" color="#777088" fontWeight="bold">
          MANAGE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      
      <>
      {/* //project */}
      <RouterLink to="/project">
    
       <Flex
        align="center"
        p="5px"
        mx="2"
        mt="10px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiFolderMinus}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"} mt="5px">Project</Text>
      </Flex>
      </RouterLink>
      </>
      <>
      <RouterLink to="/client">
      <Flex
        align="center"
        p="5px"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiUser}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"}>Clients</Text>
      </Flex>
      </RouterLink>
      </>
      <>
      <RouterLink to="/tag">
     <Flex
        align="center"
        p="5px"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"}>Teams</Text>
      </Flex>
      </RouterLink>
     </>
     <>
     <RouterLink to ="/tag">
     <Flex
        align="center"
        p="5px"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      <Text color="white"fontSize="14px" fontWeight={"400"}>Tag</Text>
      </Flex>
      </RouterLink>
     </>
     <>
     <Flex
        align="center"
        p="5px"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaQuestion}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"}>Help</Text>
      </Flex>
     </>
     <>
     <Flex
        align="center"
        p="5px"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4F2276',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      <Text color="white" fontSize="14px" fontWeight={"400"}>Subscriptions</Text>
      </Flex>
     
     </>
     <Box lineHeight={"18px"} color={"white"} bg="#563176" mt="10px" borderBottom={"2px solid grey"} textAlign="left" px="6%" py={"15px"}>
      <Text fontSize={"16px"} fontWeight="400" letterSpacing={"0.2px"}>Trial: 30 days Left</Text>
      <Link textDecoration={"underline"} fontSize="14px">Upgrade Today</Link>
     </Box>
     <Box color={"white"} bg="#563176" borderBottom={"2px solid grey"} textAlign="center" px="6%" py={"5px"}>
      <Text fontSize="14px" fontWeight="400">Resume onborading</Text>
     </Box>
      </Box>
      <Box  h="60px" mt="20px" paddingTop="15px" px="2%"  border="2px solid grey">
        <Flex>
      <FaUserTie color="white" fontSize="25px"/>
        <Text color="white" >{email}</Text>
        </Flex>
      </Box>
      <Button marginTop="15px" color="Red" onClick={handleLogout}><FiLogOut/>Logout</Button>
    
    </Box>
  );
};

const NavItem = ( {icon,children, ...rest}) => {

  return (
    
      <Flex
        align="center"
        p="1"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
  );
};

const MobileNav = ({ ...rest }) => {
  return (
    <Box w="50px" border="1px solid green">
    <Flex
      height="100vh"
      width="50px"
      alignItems="center"
      direction="column"
      bg={"#2c1338"}
      borderBottomWidth="1px"
      // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
        <Box mt="5px" h="50px" borderBottom="1px solid #777088">
        <Image  margin="auto" h="35px" src="https://www.apkmirror.com/wp-content/uploads/2022/05/45/6279203c21d5f.png"/>
        </Box>
         <Box  mt="5px" h="50px" borderBottom="1px solid #777088">

    
    <RouterLink to="/timer">
    <Flex
     align="center"
     p="1"
     mx="2"
     mt="5px"
     borderRadius="lg"
     role="group"
     cursor="pointer"
     _hover={{
       bg: 'grey',
       color: 'white',
     }}
     >
     {(
       <Icon
         mr="4"
         fontSize="20px"
         padding="auto" 
         color="white"
         _groupHover={{
           color: 'white',
         }}
         as={FaStopwatch}
       />
     )}
   
   </Flex>
   </RouterLink>
         </Box>
       <Box  mt="10px" h="50px" borderBottom="1px solid #777088">
       {Anylyze.map((link) => (
        
        <NavItem paddingTop="5px" icon={link.icon}>
         <Text color="white" >{link.icon}</Text> 
        </NavItem>
        
      ))}
      </Box>
       
        <Box  mt="5px"  borderBottom="1px solid #777088">
        {/* {Manage.map((link) => (
        <NavItem  paddingTop="10px"  margin="5px,0px,10px,8px" icon={link.icon}>
        <Text color="white"   >{link.icon}</Text> 
        </NavItem> */}
      {/* ))} */}
      <RouterLink to="/project">
    
       <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiFolderMinus}
          />
        )}
      
      </Flex>
      </RouterLink>
      <>
      <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiUser}
          />
        )}
      
      </Flex>
      </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      
      </Flex>
     
     </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaQuestion}
          />
        )}
      
      </Flex>
     </>
    </Box>
  </Flex>
  </Box>
  );
};
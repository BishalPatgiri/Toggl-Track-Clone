import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Image,Text } from '@chakra-ui/react'
import Navbar from "../NavComponents/Navbar"
import { FaAngleRight } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';


const button = ["Freelancers","Agencies & professional services","Enterprise teams"]

const data = [
    
    {
        heading : "Need time tracking that helps you stay productive and bill clients accurately?",
        sub1:"Toggl Track is indispensable for keeping track of my hours by project so I can create invoices. It makes it easy to calculate the time I need for certain types of work. All in all, it is the best way to accurately prepare your financial claims.",
        sub2:"Ema N. (Editor)",
        img:"https://public-assets.toggl.com/b/static/bed57e40b10610cc4477f5d05bcb524d/efbf5/type-freelancer.png"
     },
     {
        heading : "Need a simpler way to scope projects and track billable hours?",
        sub1:"Excellent time tracking and overview of project management. Toggl Track helps us drive insights about how to better allocate time and energy to make the business grow.",
        sub2:"Lisandro R. (Marketing)",
        img:"https://public-assets.toggl.com/b/static/6209decc0686b8eb13ff787236a767ff/efbf5/type-agency.png"

     },
     {
        heading : "Need fuss-free time tracking that gets you accurate data for easy analysis?",
        sub1:"This is a very useful tool for our organization as it allows us to keep a detailed record of the time invested by each of our collaborators. We work with several contractors and it allows us to measure efficiencies and delays for every single employee",
        sub2:"Mariana G. (Finance Director)",
        img:"https://public-assets.toggl.com/b/static/6b3ce22125297ade573edc3ac28f4786/efbf5/type-enterprise.png"
     }
    

]



export const HomeMid3 = () => {
  return (
 
    <Box 
    bg="#fefbfa"
    // bg="red"
    // h={{base:"",sm:"",md:"",lg:"120vh",xl:"120vh","2xl":"100vh"}} 
    w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    // border="1px solid black"
    padding={{base:"30px",sm:"60px",md:"90px",lg:"100px",xl:"100px","2xl":"100px"}} 
    >

   <Box
//    border="1px solid red"
//    h={{base:"30vh",sm:"30vh",md:"30vh",lg:"40vh",xl:"30vh","2xl":"30vh"}} 
//    w={{base:"100%",sm:"70%",md:"70%",lg:"60%",xl:"60%","2xl":"60%"}} 
   mb="20px"
   
//    m="auto"
//    display="flex"
//    alignItems="center"
//    justifyContent={"center"}
   >
   <Heading 
   fontSize={{base:"18px",sm:"20px",md:"30px",lg:"30px",xl:"45px","2xl":"45px"}} 
   align="left"
   >The right feature set for every team
   </Heading>

   </Box>

    {/* <Box>

    </Box>


   <Flex>

   </Flex> */}

<Tabs variant='soft-rounded'>
  
  <TabList
//    border={"1px solid red"}
   w={{base:"100%",sm:"80%",md:"100%",lg:"80%",xl:"60%","2xl":"60%"}} 
//    m="auto"
   display={"flex"}
   alignItems="center"
   flexWrap={"wrap"}
   gap="5"
   justifyContent={"space-between"}
   >
   
    {button.map((e,index) =>(
        <Tab key={index} bg="#ffebbd" color={"black"} _focus={{color:"#ffebbd",bg:"#412a4c"}}>{e}</Tab>
    ))}
  </TabList>


  <TabPanels>
    {data.map((e,index) =>(
        <TabPanel  key={index}>
        
        <Box
        // border="1px solid red"
        // h={{base:"30vh",sm:"30vh",md:"30vh",lg:"40vh",xl:"60vh","2xl":"50vh"}} 
        // w={{base:"100%",sm:"90%",md:"80%",lg:"90%",xl:"80%","2xl":"80%"}} 
        borderRadius="20px"
        // bg="#412a4c"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-around"}
        m="auto"
        flexWrap={{base:"wrap",sm:"wrap",md:"wrap",lg:"nowrap",xl:"nowrap","2xl":"nowrap"}} 
      
        gap="5"
        padding={"20px"}
        boxSize="border-box"
        >
            <Box 
            w={{base:"100%",sm:"100%",md:"100%",lg:"50%",xl:"60%","2xl":"50%"}} 
            // border="1px solid red"
            >
                <Heading fontSize={{base:"25px",sm:"30px",md:"33px",lg:"33px",xl:"40px","2xl":"40px"}}  mb="20px"  align="left" >{e.heading}</Heading>
                <Text  fontSize={{base:"12px",sm:"15px",md:"20px",lg:"16px",xl:"18px","2xl":"19px"}}   mb="20px"  align="left" color={"#E57CD8"} fontWeight={"bold"} >Learn how Toggle Track can  help you <ChevronRightIcon/></Text>
                <Text  fontSize={{base:"12px",sm:"15px",md:"20px",lg:"16px",xl:"18px","2xl":"19px"}}   mb="20px"  align="left" >{e.sub1}</Text>
                <Text fontSize={{base:"12px",sm:"15px",md:"20px",lg:"16px",xl:"18px","2xl":"19px"}} fontWeight="600"  mb="20px"  align="left" >{e.sub2}</Text>

           {/* <Box
           display={"flex"}
           justifyContent={"space-around"}
           >
           <Text _hover={{color:"pink.400"}} cursor="pointer" display="flex" justifyContent={"center"}alignItems="center" > <Text _hover={{color:"pink.400"}} color={"black"}>Or sign up for free </Text><FaAngleRight  color="white"/></Text>
           </Box> */}

            </Box>

            <Box
            // border="1px solid green"
            
            >
                <Image src={e.img} />
            </Box>
        </Box>

      </TabPanel>
    ))}
    <TabPanel>
      <p>one!</p>
    </TabPanel>
   
  </TabPanels>
</Tabs>
    

    </Box>
    
  )
}

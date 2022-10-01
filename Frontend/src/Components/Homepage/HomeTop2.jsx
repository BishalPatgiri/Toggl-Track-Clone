import React from 'react'
import { Box, Button, Flex, Heading, HStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Image,Text } from '@chakra-ui/react'

import { FaAngleRight } from 'react-icons/fa';
import { CheckIcon } from '@chakra-ui/icons';


const button = ["Employee time tracking","Billing & invoicing","Project budgeting","Reporting","Payroll"]

const data = [
    
    {
        heading : "Make timesheets history.",
        sub1:"Get the data you need without disrupting your team's workflow. Track's one-click time tracking syncs across multiple platforms.",
        sub2:"Get employee buy-in with a tool designed to empower teams with knowledge, not micromanage them.",
        img:"https://public-assets.toggl.com/b/static/2f9323cffe44aa5a7b876e19dbd12a09/428cd/employee-time-tracking-short.png"
     },
     {
        heading : "Get paid for every billable hour.",
        sub1:"Track billable hours for projects and clients as you go. Invoice clients for the exact time you put in.",
        sub2:"Keep clients happy with transparent records of how biilable hours were spent.",
        img:"https://public-assets.toggl.com/b/static/7469aa68c758bdc5cb2b985614c195f2/fa361/billing-invoicing-short.png"

     },
     {
        heading : "Keep projects profitable. Keep employees happy.",
        sub1:"Create realistic project scopes based on time tracking data. Manage team workloads to prevent burnout.",
        sub2:"Don’t turn projects in late, and don’t let projects turn unprofitable. Track budgets, labor costs, project hours and estimates in real time.",
        img:"https://public-assets.toggl.com/b/static/bedecce377d11027f44d6c9f176e55c4/fa361/project-budgeting-short.png"
     },
     {
        heading : "Get actionable insights into projects and keep stakeholders informed.",
        sub1:"Fine-tune your pricing, prioritize, and grow your business with profitability projections, earning-per-client data, ROI reports and other key insights.",
        sub2:"Communicate progress to clients and stakeholders and build trust with beautiful, ready-to-share reports.",
        img:"https://public-assets.toggl.com/b/static/0ddf4978ccec4c21a3b295689a0cdc83/fa361/reporting-short.png"
     },
     {
        heading : "Pay employees and contractors on time.",
        sub1:"Easy, fast, and fuss-free payroll based on billable hours tracked",
        sub2:"Assign billable rates to view reliable payroll data linked to every employee and contractor.",
        img:"https://public-assets.toggl.com/b/static/1e870c84fc362fc3a024578da5bae259/fa361/payroll-short.png"
     }

]



export const HomeTop2 = () => {
  return (
    <Box 
    bg="#fef6f3"
    paddingBottom={"80px"}
    // bg="red"
    // h={{base:"",sm:"",md:"",lg:"120vh",xl:"120vh","2xl":"100vh"}} 
    w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} 
    // border="1px solid black"
    >

   <Box
  //  border="1px solid red"
   h={{base:"15vh",sm:"15vh",md:"15vh",lg:"40vh",xl:"30vh","2xl":"30vh"}} 
   w={{base:"100%",sm:"70%",md:"70%",lg:"60%",xl:"60%","2xl":"60%"}} 
   
   m="auto"
   display="flex"
   alignItems="center"
   justifyContent={"center"}
   >
   <Heading 
   fontSize={{base:"18px",sm:"20px",md:"30px",lg:"30px",xl:"","2xl":""}} 
   >Time tracking for all your productivity and profitability needs
   </Heading>

   </Box>

    {/* <Box>

    </Box>


   <Flex>

   </Flex> */}

<Tabs variant='soft-rounded'>
  
  <TabList
//    border={"1px solid red"}
   w={{base:"100%",sm:"90%",md:"80%",lg:"80%",xl:"70%","2xl":"70%"}} 
   m="auto"
   display={"flex"}
   alignItems="center"
   flexWrap={"wrap"}
   gap="5"
   justifyContent={"space-around"}
   >
   
    {button.map((e,index) =>(
        <Tab key={index} bg="#ffebbd" color={"black"} _focus={{color:"#ffebbd",bg:"#412a4c"}}>{e}</Tab>
    ))}
  </TabList>


  <TabPanels>
    {data.map((e,index) =>(
        <TabPanel key={index}>
        
        <Box
        // border="1px solid red"
        // h={{base:"30vh",sm:"30vh",md:"30vh",lg:"40vh",xl:"60vh","2xl":"50vh"}} 
        w={{base:"100%",sm:"90%",md:"80%",lg:"90%",xl:"80%","2xl":"80%"}} 
        borderRadius="20px"
        bg="#412a4c"
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
            padding={"2%"}
            >
                <Heading fontSize={{base:"25px",sm:"30px",md:"33px",lg:"33px",xl:"40px","2xl":"60px"}}  mb="20px" color={"white"} align="left" >{e.heading}</Heading>
                <HStack><CheckIcon color={"#E57CD8"} marginRight={"10px"} marginTop={"-8%"}/> <Text  fontSize={{base:"12px",sm:"15px",md:"20px",lg:"16px",xl:"18px","2xl":"19px"}}   mb="20px" color={"white"} align="justify"  >  {e.sub1}</Text></HStack>
               
             <HStack marginTop={"20px"}><CheckIcon color={"#E57CD8"} marginRight={"10px"} marginTop={"-8%"}/> <Text fontSize={{base:"12px",sm:"15px",md:"20px",lg:"16px",xl:"18px","2xl":"19px"}}   mb="20px" color={"white"} align="left" >{e.sub2}</Text></HStack>  

           <Box
           display={"flex"}
           justifyContent={"space-around"} marginTop={"20px"}
           >
           <Button color={"white"} bg="#C56FBD" borderRadius={"20px"} _hover={{bg:"#564260"}} >Learn more</Button> <Text _hover={{color:"pink.400"}} cursor="pointer" display="flex" justifyContent={"center"}alignItems="center" > <Text _hover={{color:"pink.400"}} color={"white"} fontWeight={"bold"}>Or sign up for free </Text><FaAngleRight  color="white"/></Text>
           </Box>

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

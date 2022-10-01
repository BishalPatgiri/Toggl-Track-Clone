
import { Box,Heading ,Text,Image} from '@chakra-ui/react'
import React from 'react'




const middata = [
    {
        heading:"20% increase in profitability",
        sub:"at Sweat+Co PR agency, with accurate billable hours tracking.",
        img:"https://i.imgur.com/b41xLj8.jpeg"
    },
    {
        heading:"100% time tracking adoption",
        sub:"at software consultancy Newlogic for accurate reporting.",
        img:"https://i.imgur.com/lPRmg24.jpeg"
    },
    {
        heading:"40+ hours saved per month",
        sub:"at Perception Engineering with simple, one-click time tracking and invoicing.",
        img:"https://i.imgur.com/pmd5Lax.jpeg"
    }
]


export const HomeMid2 = () => {
  return (
    
    <Box
    // border="5px solid black"
    // h={{base:"120vh",sm:"120vh",md:"120vh",lg:"120vh",xl:"120vh","2xl":"120vh"}} 
    w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}}
    bg="#fdf1ec" 
    paddingBottom="100px"
    // bg="red"
    >
    


    <Box
    // border="1px solid red"
    h={{base:"15vh",sm:"15vh",md:"15vh",lg:"30vh",xl:"30vh","2xl":"30vh"}} 
    w={{base:"100%",sm:"80%",md:"70%",lg:"65%",xl:"55%","2xl":"50%"}}
    
    m="auto"
    display="flex"
    alignItems={"center"}
    justifyContent="center"
    >
        <Heading fontSize={{base:"20px",sm:"22px",md:"33px",lg:"35px",xl:"40px","2xl":"40px"}}  >Companies that use Toggl Track see results in profit and productivity</Heading>

    </Box>




    <Box
    // border={"1px solid black"}
    // h={{base:"60vh",sm:"60vh",md:"60vh",lg:"60vh",xl:"60vh","2xl":"60vh"}} 
    w={{base:"100%",sm:"100%",md:"90%",lg:"90%",xl:"80%","2xl":"80%"}}
    display="flex"
    justifyContent={"center"}
    flexWrap={{base:"wrap",sm:"wrap",md:"wrap",lg:"nowrap",xl:"nowrap","2xl":"nowrap"}}
    gap={10}
    m="auto"
   
  
    >
    {middata.map((e,index) =>(
        <Box
        key={index}
        // border="1px solid red"
        w={{base:"80%",sm:"40%",md:"40%",lg:"33%",xl:"33%","2xl":"33%"}}
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-around"}
        alignItems="center"
        >
       <Box
       w="100%"
       mb="20px"
       >
       <Text align={"left"} fontSize="25px" fontWeight={"500"} color="pink.400" >{e.heading}</Text>
       </Box>
        <Text align={"left"} fontSize="18px"  >{e.sub}</Text>
        
        <Box
        // border={"3px solid green"}
        w="70%"
        mt="20px"
        mb="20px"
        borderRadius="20px"
        overflow={"hidden"}
        >

        <Image w="100%"   _hover={{transform: "rotate(3deg)"}} src={e.img} />
        </Box>

        </Box>
    ))}

    </Box>




    </Box>

  )
}

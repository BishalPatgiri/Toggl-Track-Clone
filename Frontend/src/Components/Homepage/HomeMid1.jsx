import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box,Grid,GridItem,Heading,Text,Image, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export const HomeMid1 = () => {
  return (
//    <Box>
//   
//    </Box>
<Box
// border="3px solid red"
// height={{base:"",sm:"",md:"",lg:"",xl:"200vh","2xl":"200vh"}}
paddingBottom={"50px"}
bg="#2c1338"
>


<Box
    // border="1px solid blue"
    h={{base:"15vh",sm:"15vh",md:"15vh",lg:"30vh",xl:"30vh","2xl":"30vh"}} 
    w={{base:"100%",sm:"80%",md:"70%",lg:"65%",xl:"55%","2xl":"50%"}}
    
    m="auto"
    display="flex"
    alignItems={"center"}
    justifyContent="center"
    >
        <Heading color="white" fontSize={{base:"20px",sm:"22px",md:"33px",lg:"35px",xl:"40px","2xl":"40px"}}  >Why do teams <i>love</i> Toggl Track?</Heading>

</Box>


<Box
// border={"2px solid yellow"}
mt="20px"

>
<Grid
  
  w={{base:"100%",sm:"90%",md:"60%",lg:"80%",xl:"80%","2xl":"80%"}}
//   templateRows='repeat(2, 1fr)'
  templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(2, 1fr)",xl:"repeat(2, 1fr)","2xl":"repeat(2, 1fr)"}}
  m="auto"
  padding="10px"
  gap={4}
//   border="1px solid teal"
>

    <Box
    h= "500px"
    // border="1px solid red"
    padding={"20px"}
    bg="#f7d8f3"
    display={"flex"}
    flexDirection="column"
    justifyContent={"space-between"}
    borderRadius="20px"
    boxSizing='border-box'
    >
    <Text 
    color="#412A5C"
    fontSize={{base:"20px",sm:"25px",md:"25px",lg:"24px",xl:"23px","2xl":"25px"}} 
    align="left"
    fontWeight={500}
  
    >Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Text>

    <Image align={"center"} src="https://public-assets.toggl.com/b/static/6286ab8ed1c02d9625e9ba57ad687f8e/ed077/feature-increasebillables.png" />
    </Box>  



    <Box
    h= "500px"
    // border="1px solid red"
    padding={"20px"}
    bg="#fce5d8"
    display={"flex"}
    flexDirection="column"
    justifyContent={"space-between"}
    borderRadius="20px"
    boxSizing='border-box'
    >
    <Text 
    color="#412A5C"
    fontSize={{base:"20px",sm:"25px",md:"25px",lg:"24px",xl:"23px","2xl":"25px"}} 
    align="left"
    fontWeight={500}
  
    >Speed up team adoption with an anti-surveillance platform that gets a "yes" from every employee.</Text>

    <Image align={"center"} src="https://public-assets.toggl.com/b/static/a2fbe9cda087f0b4ddf3b1f8f768e34f/eff87/feature-trustemployee.png" />

    <Text align={"left"} color="grey" >Toggl Track stands against surveillance.</Text>
    <Text align={"left"} color="black" _hover={{color:"pink.400"}} cursor={"pointer"} fontWeight={"500"} >Read about it here.</Text>
    </Box>  




    <Box
    h= "500px"
    // border="1px solid red"
    padding={"20px"}
    bg="#fce5d8"
    display={"flex"}
    flexDirection="column"
    justifyContent={"space-between"}
    borderRadius="20px"
    boxSizing="border-box"
    >
    <Text 
    color="#412A5C"
    fontSize={{base:"20px",sm:"25px",md:"25px",lg:"24px",xl:"23px","2xl":"25px"}} 
    align="left"
    fontWeight={500}
  
    >No training necessary. Get started right away with intuitive and welcoming features.</Text>

    <Image align={"center"} src="https://public-assets.toggl.com/b/static/ee6383ab7e873edf369c3c6b373a3164/2923c/feature-intuitive.png" />
    <Text align={"left"} color="#412A5C" fontWeight={"500"}>“The acceptance from all users is very high. I have seen a 40+ year employee move from their Excel-based tracking they have used forever, to this tool without any issue.”</Text>
    <Text align={"left"} color="#412A5C">— Chris B, Systems Application Lead in an enterprise team</Text>
    </Box>  



 
    <Box
    h= "500px"
    // border="1px solid red"
    padding={"20px"}
    bg="#fff2d3"
    display={"flex"}
    flexDirection="column"
    justifyContent={"space-between"}
    borderRadius="20px"
    boxSizing="border-box"
    >
    <Text 
    color="#412A5C"
    fontSize={{base:"20px",sm:"25px",md:"25px",lg:"24px",xl:"23px","2xl":"25px"}} 
    align="left"
    fontWeight={500}
  
    >Make time tracking and reporting a breeze with a beautifully-designed app experience.</Text>

    <Image align={"center"} src="https://public-assets.toggl.com/b/static/ab5bff19a9536d90c2c584c3e402ff1c/b2f4e/feature-onetrack.png" />
    <Text align={"left"} color="#412A5C" fontWeight={"500"}>“I love that it's simple and the aesthetic is beautiful. It's really intuitive and not super complicated.”</Text>
    <Text align={"left"} color="#412A5C">— Lupita S, Community Manager for an SMB</Text>
    </Box>  






</Grid>


</Box>

<Box
   
    // border="1px solid blue"
    padding={"30px"}
    bg="#f7d8f3"
    backgroundImage={{base:"",sm:"",md:"",lg:"url('https://public-assets.toggl.com/b/static/ebd5e3f62e8f0ff1038ea4b37811be34/0e4a3/feature-integrations.png')",xl:"url('https://public-assets.toggl.com/b/static/ebd5e3f62e8f0ff1038ea4b37811be34/0e4a3/feature-integrations.png')","2xl":"url('https://public-assets.toggl.com/b/static/ebd5e3f62e8f0ff1038ea4b37811be34/0e4a3/feature-integrations.png')"}}
    backgroundPosition="right"
    backgroundRepeat="no-repeat"
    display={"flex"}
    flexDirection="column"
    justifyContent={"space-between"}
    borderRadius="20px"
    boxSizing="border-box"
    m="auto"
    mt="30px"
    // h={{base:"15vh",sm:"15vh",md:"15vh",lg:"30vh",xl:"30vh","2xl":"30vh"}} 
    w={{base:"90%",sm:"80%",md:"60%",lg:"85%",xl:"80%","2xl":"80%"}}

    >
    <Text 
    color="#412A5C"
    fontSize={{base:"20px",sm:"25px",md:"25px",lg:"24px",xl:"23px","2xl":"25px"}} 
    align="left"
    fontWeight={500}
    w={{base:"90%",sm:"80%",md:"80%",lg:"85%",xl:"50%","2xl":"50%"}}
  
    >The only time tracking tool with over 100+ integrations</Text>

    {/* <Image align={"center"} src="https://public-assets.toggl.com/b/static/ee6383ab7e873edf369c3c6b373a3164/2923c/feature-intuitive.png" /> */}
    <Text mt="30px" align={"left"} color="#412A5C" fontWeight={"500"}
     w={{base:"90%",sm:"80%",md:"80%",lg:"85%",xl:"60%","2xl":"60%"}}
    >From Asana to Zapier, Jira, Salesforce and much more — integrate Toggl Track with tools your team already </Text>
    <Text mt="100px" align={"left"} color="#412A5C"
    cursor={"pointer"} _hover={{color:"pink.400"}} fontWeight="500"
    >— Explore integrations <ChevronRightIcon/></Text>
    </Box>  
<Box>
  <Heading color={"white"} margin={"auto"} textAlign={"center"} marginTop={"5%"}>Join 5 million users tracking their time to get results</Heading>
<Text color={"#C0B5BA"} fontSize={"19px"} margin={"auto"} textAlign={"center"} marginTop={"2%"}>All plans come with a free, 30-day trial of Toggl Track Premium. Upgrade at the <br/>end of the trial or continue using Track for free.</Text>
<HStack margin={"auto"} justifyContent={"center"} marginTop={"2%"}><Button color={"white"} bg="#C56FBD" fontSize={"80%"} marginRight={"2%"} borderRadius={"20px"} _hover={{bg:"#564260"}} >Start tracking for free</Button> <Text _hover={{color:"pink.400"}} cursor="pointer" display="flex" justifyContent={"center"}alignItems="center" > <Text _hover={{color:"pink.400"}} color={"white"} fontWeight={"bold"}>Or explore pricing plan </Text><FaAngleRight  color="white"/></Text></HStack>

</Box>
</Box>
  )
}

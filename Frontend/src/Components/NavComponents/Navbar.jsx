import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Product from "./Product";
import Track from "./Track";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,Spacer,HStack
} from "@chakra-ui/react";
import Career from "./Career";
import { Link as RouterLink, useNavigate } from "react-router-dom";

//importing Pratik res
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from '../NavComponents/responsive Nav/navElements'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {ChevronRightIcon } from '@chakra-ui/icons'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const[login,setLogin]=useState()
  let [arr,setArr]=useState([])
  const navigate=useNavigate()
  console.log(arr,nav)
  var token=localStorage.getItem("token")
 console.log(token)
  const handleLogout=()=>{
    localStorage.removeItem("token")
    

    navigate("/")
    }
 

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
console.log(scrollPosition)
  let toggle=(data)=>{
    if(arr.length==0&&!arr[0]!==data){
      setArr([...arr,data])
      console.log(arr)
      setNav(true)
    }
    else if(arr.length!==0&&arr[0]===data){
      let x=[...arr]
     x.shift()
     setArr(x)
      
      setNav(false);
      console.log(arr)
    }
    else if(arr.length!==0&&arr[0]!==data){
      let x=[...arr]
     x.shift()
     x.push(data)
     
     setArr(x)
     setNav(true);
    }
  }
  return (
    <>
    <Box h="30px" backgroundColor={"pink.400"} px="4%">
    <HStack pt="4px" fontSize="14px">
      <Spacer/>
      <Text>Back to Toggl Glogal</Text>
      <Text>Product</Text>
      <Text>Blog</Text>
      <Text>Our Mission</Text>
      <Text>Working at Toggl</Text>
    </HStack>
  </Box>
    <Nav style={{position:"fixed",top:scrollPosition>=5?"0px": "30px",width:"100%",paddingTop:"0px"}} >
    
    <div
      className={style.navbar_main}
      
      style={
        nav === true
          ? { backgroundColor: "#FCE5D8", color: "black"}
          : { backgroundColor: "rgb(44, 19, 56)" }
      }
    >
      <div className={style.navbar_main1} style ={{marginRight:"20%"}} >
        <div className={style.navbar_sub2}  >
          <NavLink to ="/">
            <RouterLink to={"/"} >
              <h1
              style={{
                fontSize: "30px",
                margin: "0px 10px",
                color: "#e57cd8",
                fontWeight: "700",
              }}
            >
              toggl track
            </h1>
            </RouterLink>
          </NavLink>

          <Bars onClick={onOpen} />
          {/* Drawer */}

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
              <DrawerContent backgroundColor={"#FCE5D8"}>
                <DrawerHeader borderBottom='1px solid grey'>
                  <h1
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                      color: "#e57cd8",
                      fontWeight: "700",
                    }}
                  >
                    toggl track
                  </h1>
                  </DrawerHeader>
                <DrawerBody padding={"20px"}>
                  <p style={{padding:"10px 0px 10px 10px"}}>Products <ChevronRightIcon/></p>
                  
                  <p style={{padding:"10px 0px 10px 10px"}}>Pricing </p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Why Track? <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Careers <ChevronRightIcon/></p>
                  <p style={{padding:"10px 0px 10px 10px"}}>Book a Demo </p>

                  <div>
                    <button>Try for free</button>
                  </div>
                </DrawerBody>
              </DrawerContent>
        </Drawer>

          {/* Drawer Ends */}

          <NavMenu >
          

          <Accordion
            allowToggle
            display="flex"
            
            style={
              
              nav === false
                ? { borderTop: "0px solid #FCE5D8" }
                : { borderTop: "0px solid rgb(44, 19, 56)" }
            }
            className={style.toogle1} >

            {/* <NavLink to = "/produts"> */}
          
            <AccordionItem style={{border:"none"}}>
              <h2 >
                <AccordionButton
                  background="rgb(44, 19, 56) "
                  border="#412a4c "
                  flex="1"
                  style={
                    nav === true
                      ? { background: "#FCE5D8", color: "black" }
                      : { background: "rgb(44, 19, 56)" }
                  }
                  onClick={() => {
                   toggle(1)
                   
                  }}
                  fontSize="15px"
                >
                 
                    Product
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black",textDecoration:"underline" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"} style={{padding:"0px"}}>
                {/* <div > */}
                  <Product />
                {/* </div> */}
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}

            <NavLink to = "/Prices">         
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <RouterLink to={"/Prices"} style={{fontSize:"15px",lineHeight:"30px"}}>
                    
                      Pricing
                    {/* </Box> */}
                  </RouterLink>
                </AccordionButton>
              </h2>
            </AccordionItem >
            </NavLink>
            
            {/* <NavLink to = "/track"> */}
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                  onClick={() => {
                    toggle(2)
                  }}
                  fontSize="15px"
                >
                 
                    WhyTrack
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"} padding="0px" >
                <div className={style.navbar_track}>
                  <Track />
                </div>
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}

            <div className={style.line}></div>
            {/* <NavLink to = "/career"> */}
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                  onClick={() => {
                    toggle(3)
                  }}
                  fontSize="15px"
                >
                  
                    Careers
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"}>
                <div className={style.navbar_careers}>
                  <Career />
                </div>
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}


            <div className={style.line}></div>
          </Accordion>
          </NavMenu>

        
        </div> 
      </div>
  

      <NavBtn >
      {/* <div className={style.navbar_main2}>

      <NavLink to = "/demo">
        <div
          className={style.navbar_book}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null 
          }>
        
          <Link to={"/demo"}>Book a demo</Link>
        </div>
        </NavLink>

        <div className={style.navbar_hr}></div>
        <NavLink to = "/login">
        <div
          className={style.navbar_log}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null
          }
        >
          {" "}
          <Link to={"/login"}>Log in</Link>
        </div>
        </NavLink>

        <NavBtnLink to="/signin">
        {/* <button
          className={style.navbar_free}
          style={
            nav === true
              ? { backgroundColor: "#E57CD8", color: "black", border: "none" }
              : {
                  backgroundColor: "#FFF3ED",
                  color: "#E57CD8",
                  border: "none ",
                }
          }
        >
          try for free
        </button> */}
        {/* Try for free
        </NavBtnLink>
      </div> */} 

          <NavLink to = "/BookDemo" >
            <Text color={nav&&"black"} fontWeight={nav&&"bold"}>
                      Book a demo 
                      </Text> 
                      
                      </NavLink>
                      
                      {
                      token?
                      <NavLink to="/">
                       <Button color="black" onClick={handleLogout}>Logout</Button>  
                      </NavLink>
                      
                        :
                        <NavLink to = "/login">
                       <RouterLink to="/login"><Button color="black" fontWeight={nav&&"bold"} style={nav?{background:"#FCE5D8"}:null}>Login</Button></RouterLink>  
                      </NavLink>
                      
                      
                      }
            <NavBtnLink style={nav?{background:"#e57cd8",color:"black"}:null} to="/signup">
                Try for free
            </NavBtnLink>
      </NavBtn>
    </div>
    
    </Nav>

    </>
  );
};

export default Navbar;
import { Box, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import "./Apps.css"
import { AiFillApple } from "react-icons/ai";
import { DiWindows } from "react-icons/di";
import { SiAndroid } from "react-icons/si";
const Apps = () => {
  return (
    <Box mt="50px" bg="#f7d8f3" color={"black"} textAlign="center">
      <Text
        fontSize={{ lg: "42px",md: "30px",base: "25px" }}
        fontWeight="bold"
        w={{ lg: "40%",md:"60%",base:"80%" }}
        m="auto"
        p={{ lg: "100px 0px 0px 0px" , md: "100px 0px 0px 0px" ,base: "100px 0px 0px 0px" }}
      >
        Online, offline or on the go? We{" "}
        <Text as="span" color="#e57cd8">
          have an app
        </Text>{" "}
        for that!
      </Text>

      <Text fontSize={"15.2px"} mt="15px" mb="25px">
        Your data instantly syncs across all apps and devices
      </Text>

      <Box className="gridwala">
        <Box style={{width:"90%",margin:"auto"}}>
          <Image style={{width:"120px",margin:"auto",marginTop:"20px"}} src="https://public-assets.toggl.com/b/static/2038847e62390356691df99de87fece9/368f9/icon-mobile.avif"/>
          <Text fontWeight={"bold"}>MOBILE APPS</Text>
          <Text>Start and stop tracking from anywhere</Text>
          <Box style={{display:"flex",gap:"20px"}} marginLeft={"7%"} marginTop={"2%"}>
          <a  href="https://apps.apple.com/us/app/toggl/id1291898086" target={"_blank"} rel="noreferrer" >
            <Button margin={"auto"} alignItems={"center"} justifyContent={"center"} marginLeft={"4%"}>
              <Box fontSize={"30px"} >
                <AiFillApple />
              </Box>
              <Text>ios</Text>
            </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.toggl.giskard" target={"_blank"} rel="noreferrer"> <Button>
                <Box fontSize={"30px"} color="#80ed99">
                    <SiAndroid/>
                </Box>
                {" "}
                <Text>Android</Text>
            </Button></a>
          </Box>
        </Box>
        <Box>
          <Image style={{width:"220px",margin:"auto",marginTop:"30px"}} src="https://public-assets.toggl.com/b/static/ed4bb21f30d3f3c03afab7f59b73bfd4/b794d/icon-desktop.avif"/>
          <Text fontWeight={"bold"}>DESKTOP APPS</Text>
          <Text>For users who want to work with minimal distractions</Text>
          <Box style={{display:"flex",gap:"20px"}} marginLeft={"7%"} marginTop={"2%"}>
          <Button>
                <Box fontSize={"30px"}>
                    <DiWindows/>
                </Box>
                {" "}
                <Text>Windows</Text>
            </Button>
            <a href="https://apps.apple.com/us/app/toggl-track-hours-time-log/id1291898086" target={"_blank"} rel="noreferrer"> <Button>
              <Box fontSize={"30px"}>
                <AiFillApple />
              </Box>
              <Text>macOS</Text>
            </Button></a>
          </Box>
        </Box>
        <Box>
          <Image style={{width:"200px",margin:"auto",marginTop:"15px"}} src="https://public-assets.toggl.com/b/static/cef7d9e046286fdfe97835e7c8df9119/c72dd/icon-webapp.avif"/>
          <Text fontWeight={"bold"}>WEB APP</Text>
          <Text>To view time reports, manage projects, and teams</Text>
          <Box style={{textAlign:"center"}}>
          <Button bg="#e57cd8" mt="10px">Sign up for free</Button>
          </Box>
        </Box>
        <Box>
          <Image style={{width:"145px",margin:"auto"}} src="https://public-assets.toggl.com/b/static/93ea6c69d64adf944aeaeaef409d57ee/340ee/icon-browser.avif"/>
          <Text fontWeight={"bold"}>BROWSER PLUGINS</Text>
          <Text>100+ integrations with your favorite online tools</Text>
          <Box style={{display:"flex",gap:"20px"}} marginLeft={"7%"} marginTop={"2%"}>
          <a href="https://chrome.google.com/webstore/detail/toggl-track-productivity/oejgccbfbmkkpaidnkphaiaecficdnfn" target={"_blank"} rel="noreferrer"> <Button>
              <Box fontSize={"30px"}>
               <Image src="https://public-assets.toggl.com/b/static/332df9a3c112ad4f9957b2955ccd6e8a/a7512/chrome.avif"/>              </Box>
              <Text ml="7px">Chrome</Text>
            </Button></a>
           
           <a href="https://addons.mozilla.org/en-US/firefox/addon/toggl-button-time-tracker/" target={"_blank"} rel="noreferrer"> <Button>
                <Box fontSize={"30px"} color="#80ed99">
                <Image src="https://public-assets.toggl.com/b/static/319c6802313fdddaae75bbe61ec3501b/c5779/firefox.avif"/>             
                </Box>
                {" "}
                <Text ml="7px">Firefox</Text>
            </Button></a>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Apps;

import React, { useEffect, useState } from "react";
import { Center, Flex, Text, Container,Button, Box } from "@chakra-ui/react";
import {
  AiFillSetting,
  AiOutlineDown,
} from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { format, getDate } from "date-fns";
import Rangetimer from "./Rangetimer";
import axios from "axios";
import { msToTime } from "./api";

const SubNav = ({count}) => {
  const[open,setOpen]= useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


    const [time,setTime]=useState("00:00:00")
    const [project,setProject]=useState([])

    let getdata = () => {
      let token=localStorage.getItem("userToken")
       axios.get(`https://lit-woodland-02359.herokuapp.com/timer`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
       }).then((res) => {
        setProject(res.data.data)
      });
      
     }

    let timeCal=(arr)=>{
      let sum=0
      arr.map((ele)=>{
        sum=sum+Number(ele.stopat)
      })
      return msToTime(sum)
    }

     useEffect(()=>{
      getdata()
      setTime(timeCal(project))
     },[count])

  return (
    <Flex
      bg="#fcf7f5"
      flexDirection="column"
      gap="20px"
      p="15px"
      pb="30px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Center>
          <Text fontSize={"12px"} fontWeight={"bold"}>THIS WEEK</Text>
        </Center>

        <Flex gap="10px">
          <Center>
            <Text>Week Total {time}</Text>
          </Center>

          <Flex
            border="1px"
            borderColor="black"
            borderRadius="25px"
            p="2px"
            alignItems="center"
            justifyContent="center"
          >
            {/* <Container borderRight="1px" borderColor="black">
              <AiOutlineLeft />
            </Container> */}
            {open?(
                          <Container cursor='pointer' margin="0 5px 0 5px" onClick={()=>setOpen(!open)}>
                          <Text>
                            <Text>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                              date[0].endDate,
                              "dd/MM/yyyy"
                            )}`}</Text>
                          </Text>
                        </Container>
            ):(
              <Container cursor='pointer' margin="0 5px 0 5px" onClick={()=>setOpen(!open)}>
              <Text px={"50px"}>
               This Week
              </Text>
            </Container>
            )}

            {open && <Rangetimer date={date} setDate={setDate} />}
          </Flex>
          <Center>
            <AiFillSetting />
          </Center>
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              Views
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box display="flex" justifyContent={"space-between"}>
          <Text>Project Name</Text>
          <Text>Cient Name</Text>
          <Text>Visibility</Text>
          <Text>Time duration</Text>
          </Box>
      {
        
        project.length>0 && project.map((ele)=>(
          <Box key={ele._id} display="flex" justifyContent={"space-between"}>
          <Text>{ele.project}</Text>
          <Text>{ele.client}</Text>
          <Text>{ele.status}</Text>
          <Text>{msToTime(ele.stopat)}</Text>
          </Box>
        ))
      }
      {
        project.length==0 && <Text>(No Project)</Text> 
      }
      <Box mt="-15px" bgColor="#7e6e85" h="5px" borderRadius="20px"></Box>
    </Flex>
  );
};

export default SubNav;

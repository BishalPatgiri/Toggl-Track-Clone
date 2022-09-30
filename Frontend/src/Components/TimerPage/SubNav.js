import React, { useState } from "react";
import { Center, Flex, Text, Container,Button, Box } from "@chakra-ui/react";
import {
  AiFillSetting,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { format } from "date-fns";
import Rangetimer from "./Rangetimer";

const SubNav = () => {
  const[open,setOpen]= useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
    let time="00:00:00"
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
      <Text>(No Project)</Text> 
      <Box mt="-15px" bgColor="#7e6e85" h="5px" borderRadius="20px"></Box>
    </Flex>
  );
};

export default SubNav;

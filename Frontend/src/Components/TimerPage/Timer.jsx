import { Box, Button, FormControl, FormLabel, Input, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useRef, useState } from 'react'
import {
  BsFillTagFill,
  BsCurrencyDollar,
  BsArrowRight,
  BsFolderFill
} from "react-icons/bs";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import Googlestop from './GoogleStop';
import { postdata } from './api';
import { formatAMPM } from './Time';
import {GrAddCircle} from 'react-icons/gr'
import { AiFillPlayCircle } from "react-icons/ai";
// import Scheduler from './Scheduler';
import SubNav from './SubNav';
// import TopNav from '../TimerPage/TopNav';

export const Timerd = () => {
  const token=localStorage.getItem("token")
    const [watch, setWatch] = useState(0);
    const [text, setText] = useState("Draft");
    const[send,setSend]=useState({})
    const [data, setData] = useState([]);
    const id = useRef(null);
    const [count,setCount]=useState(0)
    // console.log(data)
    // console.log(text);

    const start = () => {
      if (!id.current) {
        id.current = setInterval(() => {
          setWatch((el) => el + 10);
        }, 10);
      }
    };

     let getdata = () => {
      let user=localStorage.getItem("userId")
       axios.get(`https://limitless-peak-78690.herokuapp.com/timer/${user}`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
       }).then((res) => setData(res.data));
      
     };

    const stop = async () => {
      setCount(count+1)
      postdata({ id: Date.now(), project: text ,stopat:JSON.stringify(watch)})
      getdata()
      clearInterval(id.current);
      id.current = null;
      setSend()
      setWatch(0)
    };
    let project=true
    let [timer ,setTimer ]= useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  return (
    <Box w={"100%"}>
    <Box px="2%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}  w="100%" h="80px" gap="2%" display="flex" alignItems={"center"}>
      
            <input style={{border: "none",backgroundcolor: "transparent",resize: "none",outline: "none"}} placeholder='What are you working on'/>
            <Spacer/>
     <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>NAME</FormLabel>
              <Input value={text} onChange={(e)=>setText(e.target.value)} ref={initialRef} placeholder='First name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>CLIENT</FormLabel>
              <Input placeholder='No Client' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>TEMPLETE</FormLabel>
              <Input placeholder='No Templete' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>VISIBILITY</FormLabel>
              <Input placeholder='Private' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' w={"100%"}>
              Create Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

            {!project ? (
              <BsFolderFill color="#7e6e85" size="8%" />
            ) : (
              <Text onClick={onOpen} _hover={{bg:"#DAE7ED"}} p="5px" borderRadius={"8px"}>+ Create a Project</Text>
            )}
            <BsFillTagFill color="#7e6e85" h="40px" />
            <BsCurrencyDollar color="#7e6e85" h="40px" />
            {/* <TopNav/> */}
            {!timer ? (
              <Box display={"flex"} alignItems="center" gap={"20px"}>
                <Googlestop watch={watch} />
                <AiFillPlayCircle
                size="60px"
                color='#DC5FB2'
                cursor="pointer"
                onClick={!watch ? start : stop}
              />
              </Box>
            ) : (
              <>
                <Box
                  border="1px"
                  borderColor="black"
                  borderRadius="8px"
                  p="5px"
                >
                  <Text color="black">{`${formatAMPM(
                    new Date()
                  )}     Today`}</Text>
                </Box>
                <BsArrowRight color="#7e6e85" size="20px" />
                <Box
                  border="1px"
                  borderColor="#E8E3E6"
                  borderRadius="8px"
                  p="5px"
                >
                  <Text color="black">{formatAMPM(new Date())}</Text>
                </Box>
              </>
            )}

              <VStack bg="#F3EDED" borderRadius={"5px"} p="2px">
              <AiFillPlayCircle
                size="18px"
                cursor="pointer"
                onClick={()=>setTimer(false)}
              />
              <GrAddCircle
              onClick={()=>setTimer(true)}
               size="18px" color="#7e6e85" cursor="pointer" />
              </VStack>   
    </Box>
    <SubNav count={count}/>  
    </Box>
  )
}

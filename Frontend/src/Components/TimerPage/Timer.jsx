import { Box, Button, FormControl, FormLabel, Input, Select, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'
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
import SubNav from './SubNav';
import { useEffect } from 'react';

export const Timerd = () => {
  const token=localStorage.getItem("userToken")

    const [watch, setWatch] = useState(0);
    const [text, setText] = useState("Draft");
    const [status, setStatus] = useState("Private");
    const [client, setClient] = useState("No Client");
    const[send,setSend]=useState({})
    const [data, setData] = useState([]);
    const id = useRef(null);
    const [count,setCount]=useState(0)
    const [clientData,setClientData]=useState([])
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
       axios.get(`https://toggl-track-backend.onrender.com/timer`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
       }).then((res) => setData(res.data));
      
     };

     const getClientdata = () => {
      axios.get("https://toggl-track-backend.onrender.com/client",{
       headers:{
         "authorization":`Bearer ${token}`
       }
    
      }).then((res) => setClientData(res.data.data));
    
    };

    const stop = async () => {
      setCount(count+1)
      postdata({project: `${text}` ,stopat:JSON.stringify(watch),client:client,status:status})
      getdata()
      clearInterval(id.current);
      id.current = null;
      setSend()
      setWatch(0)
    };
    let [project,setProject]=useState(true)
    let [timer ,setTimer ]= useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    useEffect(()=>{
      if(data.length===0){
        getdata()
      }
      getClientdata()
    },[])

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
              <Select onChange={(e) => {setClient(e.target.value)}}>
                <option value=""></option>
              {
                clientData.length>0&&clientData.map(ele=>(
                  <option key={ele._id} value={ele.clientname}>
                      {ele.clientname}
                  </option>
                ))
              }  
              </Select>  
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>TEMPLETE</FormLabel>
              <Select>
                <option value="Template 1">Template 1</option>
                <option value="Template 2">Template 2</option>
                <option value="Template 3">Template 3</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>VISIBILITY</FormLabel>
              <Select onChange={(e)=>setStatus(e.target.value)}>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='pink' w={"100%"} 
            onClick={()=>{
              onClose()
              setProject(false)
              }}>
              Create Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

            {!project ? (
              <BsFolderFill color="#7e6e85" size="20px" />
            ) : (
              <Text onClick={onOpen} _hover={{bg:"#DAE7ED"}} p="5px" borderRadius={"8px"}>+ Create a Project</Text>
            )}
            <BsFillTagFill color="#7e6e85" size="20px" />
            <BsCurrencyDollar color="#7e6e85" size="20px" />
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

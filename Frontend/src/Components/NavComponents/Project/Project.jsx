import React, { useState,useEffect } from 'react';
import style from './project.module.css';
import { Select,Stack,FormControl,FormLabel,Input,Button, useToast} from '@chakra-ui/react'
import { IoIosPerson,IoLogoUsd,IoIosPeople,IoMdListBox,IoMdSwitch,IoMdArrowDropdown} from "react-icons/io";
import { FaFirstOrderAlt } from "react-icons/fa";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Switch
  } from '@chakra-ui/react'

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
// import { postdata } from '../../TimerPage/api';
import axios from "axios"
import { ChevronDownIcon } from '@chakra-ui/icons';



const Project = () => {
  const token=localStorage.getItem("userToken")
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name, setName] = useState("");
  const [client,setClient] = useState("");
  const [status,setStatus] = useState("Pubic");
 
  const[data,setData]=useState([])
  const [clientData,setClientData]=useState([])
 
  const getdata = () => {
    axios.get("https://lit-woodland-02359.herokuapp.com/project",{
     headers:{
       "authorization":`Bearer ${token}`
     }

    }).then((res) => setData(res.data.data));
  
  };


  const getClientdata = () => {
    axios.get("https://lit-woodland-02359.herokuapp.com/client",{
     headers:{
       "authorization":`Bearer ${token}`
     }
  
    }).then((res) => setClientData(res.data.data));
  
  };


  const handleSubmit = () => {
    const payload = {
      name:name,
      client:client,
      status:status
    }
    
  axios
    .post("https://lit-woodland-02359.herokuapp.com/project/create", payload,{
      headers:{
        "authorization":`Bearer ${token}`
      },
    })
    .then((res) => console.log("Project Added Successfully"))
    .then(res=>{
      getdata()
    })
    .catch(err=>{
      toast({
        title: 'Fill all the details',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    });
  }

  useEffect(()=>{
    getdata()
    getClientdata()
  },[])

  const deletedata=(id)=>{
    axios
    .delete(`https://lit-woodland-02359.herokuapp.com/project/delete/${id}`,{
      headers:{
        "authorization":`Bearer ${token}`
      }})
    .then((res) => {

      toast({
        title: 'Project Deleted Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    })
    .then(res=>getdata());
  }

  const handleEdit=(id)=>{
    axios
    .patch(`https://lit-woodland-02359.herokuapp.com/project/edit/${id}`,{},{
      headers:{
        "authorization":`Bearer ${token}`
      }})
    .then((res) => console.log(res.data.message));
  }

  return (
    <div className={style.container}>
        <div className={style.top1} >
            <p>Projects</p>
            <button className={style.newBtn} onClick={onOpen}>+ New Project</button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new project</ModalHeader>
            <ModalCloseButton />
          <ModalBody pb={6} >
            <FormControl >
              <FormLabel>Project Name</FormLabel>
              <Input ref={initialRef} placeholder='Project name' value={name} onChange={(e) => {setName(e.target.value)}}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Client name</FormLabel>
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
              <FormLabel>Template</FormLabel>
              <Select>
                <option value="">Template 1</option>
                <option value="">Template 2</option>
                <option value="">Template 3</option>
              </Select>
            </FormControl>

            <FormControl  mt={4} display='flex' alignItems='center' justifyContent={"space-between"}>
                <FormLabel >
                     Private
                </FormLabel>
                <Switch onChange={()=>setStatus("Private")} id='email-alerts' colorScheme={"pink"}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' width={"100%"} onClick={handleSubmit}>
              Create Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </div>

        <div className={style.top2}>
            <Stack spacing={3} border={"1px solid grey"} width="121px" padding={"5px"} borderRadius="10px">
                <Select placeholder='Show Projects' variant='unstyled' width="121px" >
                    <option value='Active'>Public</option>
                    <option value='Archived'>Private</option>
                    <option value='Both'>None</option>
                </Select>
            </Stack> 

            <div className={style.filter}>
                Filter by:
                <div> <IoIosPerson style={{marginTop:"4px"}}/>Client</div>
                <div><IoIosPeople style={{marginTop:"4px"}}/>Team</div>
                <div> <IoLogoUsd style={{marginTop:"4px"}} />Billable</div>
                <div><IoMdListBox style={{marginTop:"4px"}} />Project name</div>
            </div>   
        </div>

        <div className={style.top3}>
            <div>
                <button className={style.bulkBtn}> <IoMdSwitch style={{marginTop:"4px"}}/>Bulk edit</button>
            </div>

            <div className={style.title}>
                <div>PROJECT <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>CLIENT <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>STATUS <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
                <div>BILLABLE STATUS <IoMdArrowDropdown style={{marginTop:"4px"}}  /></div>
            </div>

        </div>
        <div >
       
          { data.length>0 &&
            data.map((item,index) => (
              
              <div className={style.map} key ={index}>
                <div style={{display:"flex"}}>
                <FaFirstOrderAlt style={{marginTop:"4px",marginRight:"10px"}}  />
                {item.name}
                </div>
                <div >{item.client}</div>
                <div > {item.status} </div>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Options
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={()=>handleEdit(item._id)}>Edit</MenuItem>
                    <MenuItem onClick={()=>deletedata(item._id)}>Delete</MenuItem>
                  </MenuList>
                </Menu>
               </div>
            ))
          }
        </div>
    </div>
  )
}

export default Project
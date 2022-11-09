import React, { useState,useEffect } from 'react'
import style from './client.module.css';
import axios from "axios"; 
import { Text, useDisclosure, useToast } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    

  } from '@chakra-ui/react'

  import { DragHandleIcon } from '@chakra-ui/icons'

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  
  } from '@chakra-ui/react'
  import { FormControl,Input,Button } from '@chakra-ui/react'


const Client = () => {
  const token=localStorage.getItem("userToken")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast=useToast()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [show,setShow]=useState(false)

  const [client,setClient] = useState("");
  const [searchclient,setSearchClient] = useState("");
  const[data,setData]= useState([])

const getdata = () => {
  axios.get("https://lit-woodland-02359.herokuapp.com/client",{
   headers:{
     "authorization":`Bearer ${token}`
   }

  }).then((res) => setData(res.data.data));

};

const handleSubmit = () => {
  const payload = {
    clientname:client
  }
  
axios.post("https://lit-woodland-02359.herokuapp.com/client/create", payload,{
    headers:{
      "authorization":`Bearer ${token}`
    },
   
  })
  .then((res) => {
    toast({
      title: 'Client Added Successfully',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position:"top"
    })
  })
  .then(res=>getdata());
}
  
  useEffect(()=>{
    getdata();
  },[])

  const deletedata=(id)=>{

    axios.delete(`https://lit-woodland-02359.herokuapp.com/client/delete/${id}`,{
      headers:{
        "authorization":`Bearer ${token}`
      }})
    .then((res) => {
      //console.log(res.data)
      toast({
        title: 'Client Deleted Successfully',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:"top"
      })});
  }

  const editdata=(id)=>{
    localStorage.setItem("editId",JSON.stringify(id))
    setShow(true)
  }

  const handleEdit=()=>{
    let id=JSON.parse(localStorage.getItem("editId"))
    const payload = {
      clientname:client,
      }
      axios.patch(`https://lit-woodland-02359.herokuapp.com/client/edit/${id}`,payload,{
        headers:{
          "authorization":`Bearer ${token}`
        }})
      .then((res) => {
        toast({
          title: 'Client Name edited Successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position:"top"
        })
        //console.log(res.data)
        setShow(false)})
        .then(res=> getdata());
  }

  const handleSearch=()=>{
      axios.get(`https://lit-woodland-02359.herokuapp.com/client/search?client=${searchclient}`,{
        headers:{
          "authorization":`Bearer ${token}`
        }})
      .then(res=>setData(res.data.user))
  }
  
  return (
    <div className={style.container}>
      {
      show&&<div style={{width:"20%",backgroundColor:"lightblue",position:"absolute",left:"45%",top:"20%",padding:"20px"}}>
       <Text>New Client</Text>
            <FormControl>
              <Input bgColor={"white"} ref={initialRef} placeholder='New client name' value={client} onChange={(e) => {setClient(e.target.value)}} />
            </FormControl>    
            <Button colorScheme='pink' width={"20%"}  onClick={handleEdit}>
              Edit
            </Button>
      </div>}
        <div className={style.first}>
            <div>
            Clients
            <input value={searchclient} onChange={(e)=>setSearchClient(e.target.value)} type="text" placeholder='Find Client...' />
            <Button colorScheme='pink' width={"20%"} ml="10px" h="35px" mt="-5px" onClick={handleSearch}>
              Search
            </Button>
            </div>
            <button className={style.btn} onClick={onOpen} >+ New Client</button>

        </div>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder='Client name' value={client} onChange={(e) => {setClient(e.target.value)}} />
            </FormControl>    
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='pink' width={"100%"}  onClick={handleSubmit}>
              Create
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

        <div className={style.all}>
            All
        </div>

        <div className={style.client}>
            { data.length>0&&
                data?.map((item,index) => (
                    <div key={index}>
                        
                        <Menu >
                            <MenuButton
                                px={4}
                                py={2}
                                transition='all 0.2s'
                                borderRadius='md'
                                borderWidth='1px'
                                _hover={{ bg: 'gray.400' }}
                                _expanded={{ bg: 'pink.400' }}
                                _focus={{ boxShadow: 'outline' }}
                                fontSize="14px"
                                fontWeight="500"
                            >
                                {item.clientname} <DragHandleIcon />
                                </MenuButton>
                            <MenuList>
                                {/* <MenuItem>Edit</MenuItem> */}
                                <MenuItem color={"red"} onClick={()=>{
                                    editdata(item._id)}}>Edit</MenuItem>
                                 <MenuItem color={"red"} onClick={()=>{
                                  deletedata(item._id) 
                                    getdata()}}>Delete</MenuItem>
                            </MenuList>
                            </Menu>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Client
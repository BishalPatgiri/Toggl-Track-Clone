import React, { useState,useEffect } from 'react'
import style from './client.module.css';
import axios from "axios"; 
import { useDisclosure } from '@chakra-ui/react'
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
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { Select,Stack,FormControl,FormLabel,Input,Button } from '@chakra-ui/react'
  import { AiFillDelete } from 'react-icons/ai';


const Client = () => {
  const token=localStorage.getItem("token")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [client,setClient] = useState("");

  const[data,setData]= useState([])

  
   
// if("please login again"==="please login again")
// {
//       return
// }
// else{
//   setLogin(true)
// }
const getdata=()=>{
  axios.get("http://localhost:8080/client").then((res) => setData(res.data));
}

  const handleSubmit = () => {
    const payload = {"client":`${client}`}
    console.log(payload)
    
    axios.post(`http://localhost:8080/client/create`,payload)
    .then((res)=>console.log("client created"))

  }
  
  useEffect(()=>{
    getdata();
  },[handleSubmit])

  const deletedata=(id)=>{
    console.log(id)
    axios
    .delete(`http://localhost:8080/client/${id}`)
    .then((res) => console.log("delete done"));
  }
  



  return (
    <div className={style.container}>

        <div className={style.first}>
            <div>
            Clients
            <input type="text" placeholder='Find Client...' />
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
                data?.map((item) => (
                    <div>
                        
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
                                {item.client} <DragHandleIcon />
                                </MenuButton>
                            <MenuList>
                                {/* <MenuItem>Edit</MenuItem> */}
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
import React, { useState,useEffect } from 'react'
import style from './tag.module.css';
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
  } from '@chakra-ui/react'

  import { DragHandleIcon } from '@chakra-ui/icons'

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { FormControl,Input,Button } from '@chakra-ui/react'


const Tag = () => {
  const token=localStorage.getItem("token")
  var userId=localStorage.getItem("userId")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [tag,settag] = useState("");

  const [data,setData]= useState([])
  const [search,setSearch]=useState("")

const getdata = () => {
  axios.get(`https://toggl-track-backend.onrender.com/tags`,{
   headers:{
     "authorization":`Bearer ${token}`
   }

  }).then((res) => setData(res.data.data));
  }

;

const handleSubmit = () => {
  const payload = {
    "tagname":tag,
  }
  
axios
  .post(`https://toggl-track-backend.onrender.com/tags/create`,payload,{
    headers:{
      "authorization":`Bearer ${token}`
    },
   
  })
  .then((res) => getdata());
}
  
  useEffect(()=>{
    if(data.length==0)
    getdata();
  },[])

  const handleSearch=()=>{
    axios.get(`https://toggl-track-backend.onrender.com/tags/search?tag=${search}`,{headers:{
      "authorization":`Bearer ${token}`
    }}).then(res=>getdata(res.data.user))
  }

  const deletedata=(id)=>{
    console.log(id)
    axios
    .delete(`https://toggl-track-backend.onrender.com/tags/delete/${id}`,{
      headers:{
        "authorization":`Bearer ${token}`
      },
    })
    .then((res) => console.log(res.data));
  }
  
  return (
    <div className={style.container}>

        <div className={style.first}>
            <div>
            tags
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Find tag...' />
            <Button onClick={handleSearch}>Search</Button>
            </div>
            <button className={style.btn} onClick={onOpen} >+ New tag</button>

        </div>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder='tag name' value={tag} onChange={(e) => {settag(e.target.value)}} />
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

        <div className={style.tag}>
            { data?.length>0&&
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
                                {item.tagname} <DragHandleIcon />
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

export default Tag
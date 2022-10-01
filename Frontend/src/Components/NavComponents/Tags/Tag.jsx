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
import { getDate } from 'date-fns';


const Tag = () => {
  const token=localStorage.getItem("token")
  var userId=localStorage.getItem("userId")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [tag,settag] = useState("");

  const [data,setData]= useState([])
  const [search,setSearch]=useState("")

  
   
// if("please login again"==="please login again")
// {
//       return
// }
// else{
//   setLogin(true)
// }
const getdata = (val) => {
  if(!val){
  axios.get(`https://limitless-peak-78690.herokuapp.com/tags/${userId}`,{
   headers:{
     "authorization":`Bearer ${token}`
   }

  }).then((res) => setData(res.data));
  }
  else{
    setData(val)
  }

};

const handleSubmit = () => {
  const payload = {
    
    "tagname":tag,
    "userId":userId
  }
  
axios
  .post(`https://limitless-peak-78690.herokuapp.com/tags/create/${userId}`,payload,{
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
    axios.get(`https://limitless-peak-78690.herokuapp.com/tags/search?tag=${search}`,{headers:{
      "authorization":`Bearer ${token}`
    }}).then(res=>getdata(res.data.user))
  }

  const deletedata=(id)=>{
    console.log(id)
    axios
    .delete(`https://limitless-peak-78690.herokuapp.com/tags/${userId}/delete/${id}`,{
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
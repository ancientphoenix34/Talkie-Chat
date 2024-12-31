import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import {  toaster, Toaster } from "../Components/ui/toaster";
import axios from 'axios';
import { Box, Button } from '@chakra-ui/react';
import { LuActivity } from 'react-icons/lu';

const MyChats = () => {
  
  const [loggedUser,setLoggedUser]=useState();
  const {user,selectedChat,setSelectedChat,chats,setChats}=ChatState();
  
  const fetchChats = async()=>{
    try{
    const config={
      headers:{
        Authorization:`Bearer ${user.token}`,
      }
    }
    const {data}=await axios.get("http://localhost:5000/api/chat/fetchchats",config);
    console.log(data);
    setChats(data);
    }catch(error){
toaster.create({
        title:"Error occured",
        status:"warning",
        description:"Failed to load the chats",
        duration:2000,
        isClosable:true,
        position:"top"
      })
    }
  }
  useEffect(()=>{
  setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
  fetchChats();
  },[]);
  
  return (
    <div>
      <Toaster/>
     <Box
     d={{base:selectedChat? "none":"flex",md:"flex"}}
     flexDir={"column"}
     p={3}
     bg={"white"}
     w={{base:"100%",md:"31%"}}
     borderRadius={"lg"}
     borderWidth={"1px"}
     >
    <Box
    pb={3}
    px={3}
    fontSize={{base:"28px",md:"30px"}}
    fontFamily={"Work sans"}
    d={"flex"}
    w={"100%"}
    justifyContent={"space-between"}
    alignItems={"center"}
    >
My Chats
<Button
d="flex"
fontSize={{base:"17px",md:"10px",lg:"17px"}}
rightIcon={<LuActivity/>}
>New Group Chat</Button>
    </Box>
     </Box>
      
            
    </div>
  )
}

export default MyChats

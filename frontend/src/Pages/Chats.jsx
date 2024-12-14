import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/miscellaneous/SideDrawer';
import MyChats from '../Components/MyChats';
import ChatBox from '../Components/ChatBox';

const Chats = () => {
 const {user}=ChatState();

  
  return ( 
  <div style={{width:"100%"}}>
    {/* conditional rendering */}
    {/* user is a variable that is being evaluated as a boolean value (i.e., true or false).
    The && operator is a logical AND operator. It will only render the component <MyChats/> if the condition user is true. */}

    {user && <SideDrawer/>}
    <Box 
    display='flex'
    justifyContent="space-between"
    w="100%"
    h='91.5vh'
    p='10px'
    >
      {user && <MyChats/>}
      {user && <ChatBox/>}
    </Box>
      </div>
  )
}

export default Chats

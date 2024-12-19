import React, { useState } from 'react'
import {Box, Button, Drawer, Input, Menu, Text, Toast, useDisclosure} from '@chakra-ui/react';
import { Tooltip } from "../ui/tooltip";
import { MenuContent, MenuRoot, MenuItem,MenuSeparator, MenuTrigger } from '../ui/menu';
import { IconButton } from "@chakra-ui/react"
import { LuBell, LuChevronDown } from 'react-icons/lu';
import { Avatar, AvatarGroup } from "../ui/avatar";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {  toaster, Toaster } from "../../Components/ui/toaster";
import ChatLoading from '../ChatLoading';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../Components/ui/drawer"
import UserListItem from '../UserAvatar/UserListItem';

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const [isOpen, setIsOpen] = useState(false);
 
 
  const {user}=ChatState();

 const navigate=useNavigate();

  const logoutHandler=()=>{
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleSearch=async()=>{
    if(!search){
      toaster.create({
        title:"Please Enter something in search",
        status:"warning",
        duration:2000,
        isClosable:true,
        position:"top"
      })
    }

    try{
      setLoading(true);
    const config={
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    }
    const {data}=await axios.get(`http://localhost:5000/api/user/allusers?search=${search}`,config);
  setLoading(false);
  setSearchResult(data);
  console.log(searchResult);
  console.log(data);
  }catch(error){
toaster.create({
  title:"Error Occured!",
  description:"Failed to Load the Search Results",
  status:"error",
  duration:2000,
  isClosable:true,
  position:"top"
})
    }
  }


  const accessChat=async(userId)=>{
<></>
  }
  
  return <>
  <Toaster/>
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
      >
<Tooltip
label="Search Users to chat"
hasArrow
placement="bottom-end"
> 
<Button variant="ghost" onClick={()=>setIsOpen(true)}>
<i class="fa-brands fa-searchengin"></i>
<Text d={{base:"none",md:"flex"}} px="4">Search Users</Text>
</Button>
</Tooltip>

<Text
fontSize="2xl"
fontFamily="Work sans"
>Talkie</Text>
<div>
  <MenuRoot>
<IconButton
margin={"1"}
padding={"1"}
>
  <LuBell fontSize={"2xl"} m="1"/>
</IconButton>

  </MenuRoot>
  <MenuRoot>
    <MenuTrigger>
    <IconButton
  background="#DDDFDF"
  >
  <LuChevronDown fontSize={"2xl"} />
  <AvatarGroup>
    <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic}/>
  </AvatarGroup>
</IconButton>
    </MenuTrigger>
<MenuContent>
        {/* <ProfileModal user={user}> */}
        <MenuItem>
          My Profile
        </MenuItem>
        {/* </ProfileModal> */}
        <MenuSeparator />
        <MenuItem onClick={logoutHandler}>
          Logout
        </MenuItem>
 </MenuContent>       
  </MenuRoot>  
</div>
      </Box>
      <DrawerRoot placement="start" open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
      <DrawerCloseTrigger />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Search Users</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Box
          display="flex"
          pb="2"
          >
            <Input
            placeholder="Search by name or email"
            mr="2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={handleSearch}>Go</Button>
          </Box>
          {loading ? (
            <ChatLoading/>
          ):(
            searchResult?.map((user)=>(
              console.log(user),
<UserListItem
user={user}
key={user._id}
handleFunction={()=>accessChat(user._id)}
/>
            )
          )
          )}
        </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    
    </>
  
}

export default SideDrawer

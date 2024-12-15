import React, { useState } from 'react'
import {Box, Button, Menu, Text} from '@chakra-ui/react';
import { Tooltip } from "../ui/tooltip";
import { MenuContent, MenuRoot, MenuItem,MenuSeparator, MenuTrigger } from '../ui/menu';
import { IconButton } from "@chakra-ui/react"
import { LuBell, LuChevronDown } from 'react-icons/lu';
import { Avatar, AvatarGroup } from "../ui/avatar";
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  
  const {user}=ChatState();

 const navigate=useNavigate();

  const logoutHandler=()=>{
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  
  return <>
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
<Button variant="ghost">
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
        <ProfileModal user={user}>
        {/* <MenuItem>
          My Profile
        </MenuItem> */}
        </ProfileModal>
        <MenuSeparator />
        <MenuItem onClick={logoutHandler}>
          Logout
        </MenuItem>
 </MenuContent>       
  </MenuRoot>
</div>
      </Box>
    </>
  
}

export default SideDrawer

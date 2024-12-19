import { VStack, Input, Box, Button } from '@chakra-ui/react';
import { FormControl,FormLabel} from '@chakra-ui/form-control';
import React, { useState } from 'react'
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Toaster, toaster } from "../../Components/ui/toaster";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [show,setShow]=useState(false);
    const [loading,setLoading]=useState(false);
    
    const handleShowButton=()=>setShow(!show);
  
   const navigate=useNavigate();


   <Toaster />
    const submitHandler= async()=>{
    setLoading(true);
    if(!email || !password){
      toaster.create({
        title:"Please fill all the fields",
        status:"warning",
        duration:2000,
        isClosable:true,
        position:"top"
      });
      setLoading(false);
      return;
    }

    try{
const config={headers:{
  "Content-Type":"application/json",
}};

const {data}=await axios.post(`http://localhost:5000/api/user/login`,{email,password},config);

toaster.create({
  title:"Login Successful",
  status:"success",
  duration:2000,
  isClosable:true,
  position:"top"
});
localStorage.setItem("userInfo",JSON.stringify(data));
setLoading(false);
navigate("/chats");
    }catch(error){
      console.log(error);
      toaster.create({
        title:"Error Occured!",
        description:error.response.data.message,
        status:"error",
        duration:2000,
        isClosable:true,
        position:"top"
      });
      setLoading(false);
    }
    }

    return (
    <VStack spacing='2px'>
        <Toaster/>
        <Box w='full'>
      <FormControl id='email' isRequired >
        <FormLabel>E-mail</FormLabel >
        <Input placeholder="Enter your e-mail" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </FormControl>
      </Box>
        <Box w='full'>
      <FormControl id='password' isRequired >
        <FormLabel>Password</FormLabel >
        <InputGroup>
        <Input  type={show ? "text" : "password"} onChange={(e)=>setPassword(e.target.value)} value={password}/>
    <InputRightElement width="4rem">
    <Button bg="blue.500" h="1.75rem" size="md" mt={1.5} ml={-4} onClick={handleShowButton}>
        {show ? "Hide" : "Show"}
    </Button>
    </InputRightElement>
        </InputGroup>
      </FormControl>
      </Box>
        
      
      <Button
        bg='green.500'
        width="100%"
        style={{ marginTop: 15 }}
        loading={loading}
        onClick={submitHandler}
        >Login</Button>
      
      <Button
        bg='red.500'
        width="100%"
        style={{ marginTop: 4 }}
        onClick={()=>{
            setEmail("xW4tM@example.com");
            setPassword("123456");
        }}
        >Get Guest User Credentials</Button>
    </VStack>
  )
}

export default Login

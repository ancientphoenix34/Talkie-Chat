import { VStack, Input, Box, Button } from '@chakra-ui/react';
import { FormControl,FormLabel} from '@chakra-ui/form-control';
import React, { useState } from 'react'
import { InputGroup, InputRightElement } from '@chakra-ui/input';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [show,setShow]=useState(false);
  
    const handleShowButton=()=>setShow(!show);
  
   

    const submitHandler=()=>{

    }

    return (
    <VStack spacing='2px'>
        
        <Box w='full'>
      <FormControl id='email' isRequired >
        <FormLabel>E-mail</FormLabel >
        <Input placeholder="Enter your e-mail" onChange={(e)=>setEmail(e.target.value)}/>
      </FormControl>
      </Box>
        <Box w='full'>
      <FormControl id='password' isRequired >
        <FormLabel>Password</FormLabel >
        <InputGroup>
        <Input  type={show ? "text" : "password"} placeholderonChange={(e)=>setPassword(e.target.value)}/>
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

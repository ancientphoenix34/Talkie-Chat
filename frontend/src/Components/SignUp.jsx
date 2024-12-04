import { VStack, Input, Box, Button } from '@chakra-ui/react';
import { FormControl,FormLabel} from '@chakra-ui/form-control';
import React, { useState } from 'react'
import { InputGroup, InputRightElement } from '@chakra-ui/input';

const SignUp = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [pic,setPic]=useState("");
    const [show,setShow]=useState(false);
  
    const handleShowButton=()=>setShow(!show);
  
    const postDetails=(pic)=>{

    }

    const submitHandler=()=>{

    }

    return (
    <VStack spacing='2px'>
        <Box w='full'>
      <FormControl id='first-name' isRequired >
        <FormLabel>Name</FormLabel >
        <Input placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
      </FormControl>
      </Box>
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
        <Box w='full'>
      <FormControl id='password' isRequired >
        <FormLabel>Confirm Password</FormLabel >
        <InputGroup>
        <Input  type={show ? "text" : "password"} placeholderonChange={(e)=>setConfirmPassword(e.target.value)}/>
    <InputRightElement width="4rem">
    <Button bg="blue.500" h="1.75rem" size="md" mt={1.5} ml={-4} onClick={handleShowButton}>
        {show ? "Hide" : "Show"}
    </Button>
    </InputRightElement>
        </InputGroup>
      </FormControl>
      </Box>
      <Box w='full'>
      <FormControl id='pic'>
        <FormLabel>Upload your pic</FormLabel >
        <Input type='file'  border='none' onChange={(e)=>postDetails(e.target.files[0])}/>
      </FormControl>
      </Box>
      
      <Button
        width="100%"
        bg="blue.500"
        style={{ marginTop: 15 }}
        >Sign Up</Button>
    </VStack>
  )
}

export default SignUp

import { VStack, Input, Box, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import React, { useState } from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Toaster, toaster } from "../ui/toaster";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowButton = () => setShow(!show);

  const navigate = useNavigate();

  const postDetails = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      toaster.create({
        description: "Please select an image",
        type: "info",
      });
      return;
    }
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dwthxsj6j");
      fetch("https://api.cloudinary.com/v1_1/dwthxsj6j/image/upload", {
        method: "post",
        body: data
      })
      .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
          setLoading(false);
        })
        .catch((err)=>{
        console.log(err);
        setLoading(false);
        });
    } else {
      toaster.create({
        description: "Please select an image",
        type: "info",
      });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      toaster.create({
        description: "Please fill all the fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toaster.create({
        description: "Passwords do not match",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log({ name, email, password, pic });
      const { data } = await axios.post(
        `http://localhost:5000/api/user/register`,
        {
          name,
          email,
          password,
          pic,
        },
        config,
      );

    

      
      toaster.create({
        title: "Registration successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/user/chats');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}> {/* Wrap inputs inside a form */}
      <VStack spacing="2px">
        <Box w="full">
          <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          </FormControl>
        </Box>
        <Box w="full">
          <FormControl id="email" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </Box>
        <Box w="full">
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4rem">
                <Button bg="blue.500" h="1.75rem" size="md" mt={1.5} ml={-4} onClick={handleShowButton}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Box>
        <Box w="full">
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4rem">
                <Button bg="blue.500" h="1.75rem" size="md" mt={1.5} ml={-4} onClick={handleShowButton}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Box>
        <Box w="full">
          <FormControl id="pic">
            <FormLabel>Upload your pic</FormLabel>
            <Input type="file" border="none" onChange={(e) => postDetails(e.target.files[0])} />
          </FormControl>
        </Box>
        <Button
          type="submit" // Change to submit
          width="100%"
          bg="blue.500"
          style={{ marginTop: 15 }}
          isLoading={loading} // Fix loading prop
        >
          Sign Up
        </Button>
      </VStack>
    </form>
  );
};

export default SignUp;

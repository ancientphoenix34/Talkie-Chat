import React from 'react'
import { Container, Box, Text, Tabs } from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import SignUp from '../Components/Authentication/SignUp'

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
       d='flex' 
       justifyContent='center' 
       p={3}
        bg='white'
        w='100%' 
        m='40px 0 15px 0'
        borderRadius='lg'
         borderWidth='1px'
         textAlign='center'>
        <Text fontSize='4xl' 
        fontFamily='Work sans' 
        color='black' >Talkie</Text>
      </Box>
      <Box 
      bg={'white'}
      width={'100%'}
      padding={4}
      borderWidth={1}
      borderRadius={'lg'}
      >
         <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}>
      <Tabs.List mb={4}>
        <Tabs.Trigger value="tab-1" width='50%'>Login</Tabs.Trigger>
        <Tabs.Trigger value="tab-2" width='50%'>Sign Up</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1"><Login/></Tabs.Content>
      <Tabs.Content value="tab-2"><SignUp/></Tabs.Content>
    </Tabs.Root>
      </Box>
    </Container>
  )
}

export default Home

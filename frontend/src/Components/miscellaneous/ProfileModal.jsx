import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import { LuEye } from 'react-icons/lu';
import { Image } from "@chakra-ui/react"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../Components/ui/dialog";
import { Button, Text } from "@chakra-ui/react"
import { AiFillBulb } from "react-icons/ai";
const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      {
        children ? (
          <span onClick={onOpen}>{children}</span>
        ) : (
          <IconButton
            display={{ base: 'flex' }}
            icon={<AiFillBulb />}
            onClick={onOpen}
          />
          
        )
      }
      <DialogRoot motionPreset="slide-in-bottom" isOpen={isOpen} onClose={onClose}>
        <DialogTrigger asChild>
          <Button variant="outline" border={"none"}  >My Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{user.name}</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Image
              src={user.pic}
              alt={user.name}
              borderRadius={"full"}
              boxSize={"150px"}
            />
            <Text fontSize={"2xl"}>{user.email}</Text>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" onClick={onClose} bg="#e63946" _hover={{ bg: "#9b2226" }}>Close</Button>
            </DialogActionTrigger>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default ProfileModal;


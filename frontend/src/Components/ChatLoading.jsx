import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Skeleton } from '../Components/ui/skeleton'

const ChatLoading = () => {
  return (
    <Stack>
       <Skeleton flex="1"  noOfLines={7} height="5" variant="shine" />
    </Stack>
  )
}

export default ChatLoading

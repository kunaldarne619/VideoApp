import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend , AiFillYoutube ,AiFillInstagram,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p='16' color={'white'} >
        <Stack direction={['column ','row']} >
    <VStack alignItems={'stretch'} w='full' px='4'>
        <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>  
            Subscribe To Get Update
        </Heading>
        <HStack
        borderBottom={'2px solid white'}
        >
            <Input placeholder='Enter Email Here ....' border={'none'} borderRadius={'none'}
            outline='none'
            focusBorderColor='none'
            />
            <Button
            p='0'
            colorScheme={'purple'}
            variant='ghost'
            borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w='full' borderLeft={['none','1px solid white']}
    borderRight={['none','1px solid white']}>
        <Heading textTransform={'uppercase'} textAlign={'center'}  pt={['4','0']}>
            VEDIO HUB
        </Heading>
        <Text>All rights received </Text>

    </VStack>
    <VStack w='full' pt={['4','0']} >
       <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
       </Heading>
       <Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a target={'blank'} href="https://www.youtube.com/channel/UCFvHH-IN-cj2tclYCFjOjGw"><AiFillYoutube/></a>
       </Button>
       <Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a target={'blank'} href="https://instagram.com/kunal_darne_49"><AiFillInstagram/></a>
       </Button>
       <Button variant={'link'} colorScheme={'whiteAlpha'}>
    <a target={'blank'} href="https://github.com/kunaldarne619"><AiFillGithub/></a>
       </Button>

    </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
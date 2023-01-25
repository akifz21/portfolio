import React from 'react'
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import svg from '../svgs/undraw_programming_re_kg9v.svg'

function Home() {
  return (
    <>
         <Stack id={'home'} mt={{base:0,md:7}} minH={'100vh'} direction={{ base:'column', md: 'row' }}>
        <Flex p={5} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,    
                  left: 0,
                  bg: 'purple.500',
                  zIndex: -1,
                }}>
                Hello!
              </Text>
              <br />{' '}
              <Text color={'purple.500'}  as={'span'}>
                I'm Mehmet Akif
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'xl', lg: '2xl' }} >
              Junior Full-Stack Web Developer
            </Text>
          </Stack>
        </Flex>
        <Flex  justifyContent={'center'} flex={1}>
          <Image
            h={{base:'50vh',md:'100vh'}}
           
            src={
              svg
            }
          />
        </Flex>
      </Stack>
    </>
  )
}

export default Home
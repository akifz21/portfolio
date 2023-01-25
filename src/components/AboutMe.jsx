import { Avatar, Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import img from '../svgs/IMG_20220522_212930_776.jpg'

export default function AboutMe() {
  return (
    <>
      <Stack
        id={'aboutme'}
        h={'100vh'}
        py={16}
        justifyContent={'center'}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}
      >
        <Box
          justifyContent={'center'}
          align={'center'}
          boxShadow={'2xl'}
          borderRadius={'2xl'}
          padding={10}
        >
          <Heading >About me</Heading>
          <br />
          <Box textAlign={'center'}>
            <Avatar
              size={'2xl'}
              src={
                img
              }
              alt={'Jenny Wilson'}
              mb={4}
            />

           
          </Box>
          <Text

            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign={'center'}
            maxW={'3xl'}>
           I am a 3rd year student at Konya Technical University, working toward my bachelor’s degree in Computer Science with heavy emphasis on programming and Web development. I imporve myself as a full-stack developer by constantly learning new technologies.
          </Text>
        </Box>
      </Stack>
    </>
  );
}
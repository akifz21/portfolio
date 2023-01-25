import { Box, Card, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import ContactCard from './ContactCard'
import { BsLinkedin } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillMail } from 'react-icons/ai'

function Contact() {
    return (
        <>
            <Stack id={'contact'} direction={'column'} justify={'center'} align={'center'} h={'50vh'}>
                <Box
                    justifyContent={'center'}
                    align={'center'}
                    boxShadow={'2xl'}
                    borderRadius={'2xl'}
                    padding={10}
                >
                    <Heading m={3}>Contact</Heading>
                    <SimpleGrid columns={3} spacing={10}>
                        <ContactCard link={'https://www.linkedin.com/in/mehmet-akif-ozdemir/'} name={'Linkedin'} icon={BsLinkedin} />
                        <ContactCard link={'https://github.com/akifz21'} name={'Github'} icon={GoMarkGithub} />
                        <ContactCard link={'mailto:akifz2199@gmail.com'} name={'E-Mail'} icon={AiFillMail} />
                    </SimpleGrid>
                </Box>
            </Stack>
        </>
    )
}

export default Contact
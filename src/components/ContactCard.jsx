import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Icon,
    Heading,
} from '@chakra-ui/react';

function ContactCard({name,icon,link}) {
    return (
        <Card as={'a'} href={link} target={'_blank'} size={'md'} align={'center'}>        
            <CardBody>
               <Icon 
                    fontSize={'4xl'}             
                    as={icon}
               />
            </CardBody>
            <CardFooter>
               <Heading size={'md'}>{name}</Heading>
            </CardFooter>
        </Card>
    )
}

export default ContactCard
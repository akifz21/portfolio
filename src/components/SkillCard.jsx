import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';

function SkillCard({name,img}) {
    return (
        <Card size={'md'} align={'center'}>        
            <CardBody>
               <Image              
                    src={img}
               />
            </CardBody>
            <CardFooter>
               <Heading size={'md'}>{name}</Heading>
            </CardFooter>
        </Card>
    )
}

export default SkillCard
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Progress,
    Button,
    Card, CardHeader, CardBody, CardFooter, useBreakpointValue, HStack, Divider, Container
} from '@chakra-ui/react';
import SkillCard from './SkillCard';
import react from '../svgs/react-svgrepo-com.svg'
import c from '../svgs/c-sharp-svgrepo-com.svg'
import html from '../svgs/html-5-svgrepo-com.svg'
import css from '../svgs/css-3-svgrepo-com.svg'
import java from '../svgs/java-svgrepo-com.svg'
import js from '../svgs/javascript-svgrepo-com.svg'
import node from '../svgs/node-js-svgrepo-com.svg'
import postgre from '../svgs/postgresql-svgrepo-com.svg'
import spring from '../svgs/spring-boot-svgrepo-com.svg'



export default function ProductSimple() {
    return (
        <Stack id={'skills'} align={'center'} justify={{ md: 'center' }} minH={'100vh'}>
            <Heading fontSize={'5xl'} m={4}>
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '20%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'purple.500',
                        zIndex: -1,
                    }}>
                    My Skills
                </Text>
            </Heading>
            <Stack spacing={'10'} direction={{ base: 'column', md: 'row' }}>
                <Box>
                    <Heading fontSize={'3xl'} m={4}>
                        Back-end
                    </Heading>



                    <SimpleGrid spacing={{ base: '10', md: '10' }} columns={{ base: 2, md: 3 }}>
                        <SkillCard name={'C#'} img={c} />
                        <SkillCard name={'Java'} img={java} />
                        <SkillCard name={'Postgre SQL'} img={postgre} />
                        <SkillCard name={'Spring Boot'} img={spring} />
                        <SkillCard name={'Node js'} img={node} />
                    </SimpleGrid>

                </Box>
                <Divider orientation='vertical' />
                <Box >
                    <Heading fontSize={'3xl'} m={4}>
                        Front-end
                    </Heading>

                    <SimpleGrid spacing={{ base: '10', md: '10' }} columns={{ base: 2, md: 3 }}>
                        <SkillCard name={'HTML'} img={html} />
                        <SkillCard name={'CSS'} img={css} />
                        <SkillCard name={'Javascript'} img={js} />
                        <SkillCard name={'React'} img={react} />
                    </SimpleGrid>

                </Box>
            </Stack>

        </Stack>

    );
}

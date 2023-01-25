import { Button, Tooltip, useColorMode,Icon } from '@chakra-ui/react'
import React from 'react'

function NavItem({description,icon,to}) {
    const { colorMode} = useColorMode();
    return (
        <>
            <Tooltip label={description} hasArrow fontSize={'xl'} borderRadius={'2xl'}>
                <Button
                    mr={3}
                    p={{base:4,md:7}}
                    as={'a'}
                    cursor={'pointer'}
                    href={'#'+to}
                    borderRadius={'2xl'}
                    colorScheme={'whiteAlpha'}
                    color={colorMode==='light' ? 'black' : 'white' }
                    _hover={{ bg: 'purple.500', color: 'white' }}
                    _active={{ bg: 'purple.600', color: 'white' }}
                >
                    <Icon 
                        as={icon}
                        boxSize={{base:6,md:10}}
                    />
                </Button>
            </Tooltip>
        </>
    )
}

export default NavItem
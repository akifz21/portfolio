import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiHome } from 'react-icons/bi'
import { FaRegIdCard } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import NavItem from './NavItem';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box id={'navbar'} top={{base:'',md:0}} bottom={{base:0}} zIndex={1} position={'fixed'} h={'70px'} width={'100%'} flexDirection={'row'} px={5}>
        <Flex
          backgroundColor={colorMode === 'light'? 'white': 'gray.800'}
          minH={'70px'}
          borderRadius={"2xl"}
          alignItems={'center'}
          justifyContent={'center'}
          boxShadow={'2xl'}
        >
          <NavItem icon={BiHome} to={'home'} description={'Home'} />
          <NavItem icon={FaRegIdCard} to={'aboutme'} description={'About Me'} />
          <NavItem icon={BiCodeAlt} to={'skills'} description={'Skills'} />
          <NavItem icon={AiOutlineFolderOpen} to={'projects'} description={'Projects'} />
          <NavItem icon={TbMessageCircle} to={'contact'} description={'Contact'} />
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>

      </Box>
    </>
  );
}
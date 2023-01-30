import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Show, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../";

export const NavBar = () => {
    return (
        <Box as='nav' boxShadow='md'>
            <Flex px={20} style={{ padding: '1em 0' }} width={{ base: '90%', md: '80%', lg: '70%' }} maxWidth='1680px' margin='auto' justifyContent='flex-start' alignItems='center'>
                <Logo />
                <Show breakpoint='(min-width: 900px)'>
                    <Spacer />
                    <Flex gap={3} alignItems='center' color='gray.800'>
                        <Link href='/'>
                            <Text fontWeight='bold' textDecoration='underline'>Inicio</Text>
                        </Link>
                        <Text fontWeight='semibold'>-</Text>
                        <Box>
                            <Flex gap={3} fontWeight='semibold' color='gray.800'>
                                <Text as={Link} href='/admin/login' mr={2} fontSize="lg" color='blue.400' _hover={{ textDecoration: 'underline' }}>
                                    ¿Eres organizador de evento
                                </Text>
                                <Text as={Link} href='/admin/login' fontSize="lg" _hover={{ textDecoration: 'underline', color: 'green.500' }}>
                                    Iniciar sesión
                                </Text>
                                <span>/</span>
                                <Text as={Link} href='/admin/register' fontSize="lg" _hover={{ textDecoration: 'underline', color: 'orange.400' }}>
                                    Registrarse
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Show>

                <Show breakpoint='(max-width: 899px)'>
                    <Spacer />
                    <Menu>
                        <MenuButton
                            height='100%'
                            as={HamburgerIcon}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            fontSize={30}
                            padding={0.5}
                            color='gray.800'
                            border='2px solid #E2E8F0'
                            borderRadius='0.15em'
                            _hover={{ backgroundColor: '#E2E8F0' }}
                        />
                        <MenuList>
                            <MenuItem icon={<AddIcon />} command='⌘T'>
                                New Tab
                            </MenuItem>
                            <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                                New Window
                            </MenuItem>
                            <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                                Open Closed Tab
                            </MenuItem>
                            <MenuItem icon={<EditIcon />} command='⌘O'>
                                Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Show>
            </Flex>
        </Box >
    )
}

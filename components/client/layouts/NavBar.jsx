import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../";

export const NavBar = () => {
    return (
        <Box as='nav' boxShadow='md'>
            <Flex px={20} py={5}>
                <Logo />
                <Spacer />
                <Flex gap={3} alignItems='center' color='gray.800'>
                    <Link href='/'>
                        <Text fontWeight='bold' textDecoration='underline'>Inicio</Text>
                    </Link>
                    <Text fontWeight='semibold'>-</Text>
                    <Link href='/admin'>
                        <Flex gap={3} fontWeight='semibold' color='gray.800'>
                            <Text fontSize="lg" color='blue.400'>
                                ¿Eres organizador de evento
                            </Text>
                            <Text fontSize="lg">
                                Iniciar sesión / Registrarse
                            </Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

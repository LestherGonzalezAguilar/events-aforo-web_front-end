import Link from "next/link";
import {
  AddIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  CalendarIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { FiLogOut } from "react-icons/fi";

import { Logo } from "../../client/Logo";

export const NavBar = () => {
  return (
    <Box as="nav" boxShadow="md" backgroundColor={"gray.200"}>
      <Flex
        px={0}
        py={3}
        width={{ base: "90%", md: "80%", lg: "70%" }}
        maxWidth="1680px"
        margin="auto"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Center justifyContent="flex-start" alignItems="center">
          <Logo />
          <Text ml={4}>Panel del organizador</Text>
        </Center>
        <Show breakpoint="(min-width: 900px)">
          <Spacer />
          <Flex gap={3} alignItems="center" color="gray.800">
            <Link href="/admin">
              <Text
                fontWeight="bold"
                pr={8}
                fontSize="lg"
                _hover={{ textDecoration: "underline", color: "#4548EB" }}
              >
                Resumen
              </Text>
            </Link>
            <Link href="/admin/create-event">
              <Text
                fontWeight="bold"
                pr={8}
                fontSize="lg"
                _hover={{ textDecoration: "underline", color: "#4548EB" }}
              >
                Crear Evento
              </Text>
            </Link>
            <Menu pr={20}>
              <MenuButton
                color="#4548EB"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Nombre
              </MenuButton>
              <MenuList>
                <MenuItem py={5}>
                  <Text color={"red"}>
                    <FiLogOut />
                  </Text>
                  <Text ml={3}>
                    <Link href={"/"}>Cerrar Sesión</Link>
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Show>

        <Show breakpoint="(max-width: 899px)">
          <Spacer />
          <Menu>
            <MenuButton
              height="100%"
              as={HamburgerIcon}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              fontSize={30}
              padding={0.5}
              color="gray.800"
              border="2px solid #E2E8F0"
              borderRadius="0.15em"
              _hover={{ backgroundColor: "#E2E8F0" }}
            />
            <MenuList>
              <Text pl={3} color="blue.400" fontWeight="bold" fontSize="xl">
                Pedro Plasencia
              </Text>

              <Link href="/admin">
                <MenuItem icon={<CalendarIcon />}>Resumen</MenuItem>
              </Link>

              <Link href="/admin/create-event">
                <MenuItem icon={<AddIcon />}>Crear Evento</MenuItem>
              </Link>

              <MenuItem icon={<ArrowLeftIcon />}>Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </Box>
  );
};

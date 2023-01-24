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
import Link from "next/link";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <Box as="nav" boxShadow="md" backgroundColor={"gray.200"}>
      <Flex
        px={20}
        style={{ padding: "1em 0" }}
        width="90%"
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
              <Text fontWeight="bold" pr={8}>
                Resumen
              </Text>
            </Link>
            <Link href="/admin/form">
              <Text fontWeight="bold" pr={8}>
                Crear Evento
              </Text>
            </Link>
            <Menu pr={20}>
              <MenuButton
                color="blue"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Nombre
              </MenuButton>
              <MenuList>
                <MenuItem py={5}>
                  <ArrowLeftIcon mr={6} />
                  Cerrar Sesión
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

              <Link href="/form">
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

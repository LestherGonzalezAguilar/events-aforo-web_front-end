import { ArrowLeftIcon, ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

import imageLogo from "../../../assets/logooriginal.svg";

export const NavBar = () => {
  return (
    <nav>
      <Flex px={20} py={5} bg="gray.200">
        <Flex>
          <Image
            src={imageLogo}
            alt="Green double couch with wooden legs"
            height={35}
          />
          <Text fontSize="lg" mx={5} pt={1}>
            Panel del organizador
          </Text>
        </Flex>
        <Spacer />
        <Flex>
          <Text fontSize="lg" mx={5} as="b" pt={1}>
            Resumen
          </Text>
          <Text fontSize="lg" mx={5} as="b" pt={1}>
            Crear evento
          </Text>
          <Menu pr={20}>
            <MenuButton color="blue" as={Button} rightIcon={<ChevronDownIcon />}>Nombre</MenuButton>
            <MenuList>
              <MenuItem py={5}><ArrowLeftIcon mr={6} />Configuración</MenuItem>
              <MenuItem py={5}><SettingsIcon mr={6} />Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </nav>
  );
};

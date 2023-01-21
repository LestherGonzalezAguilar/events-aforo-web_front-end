import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Hide,
  Show,
  OrderedList,
  ListItem,
  GridItem,
  Flex,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { Attendee } from "./Attendee";

export const AttendeesList = () => {
  return (
    <Box my={12}>
      <Flex px={{ base: 3, lg: 20 }}>
        <Text as="b" mr={12}>
          Listado de inscriptos
        </Text>
        <Text as="b" mr={12}>
          Cantidad: 80
        </Text>
      </Flex>

      <Hide below="md">
        <TableContainer my={5} px={{ md: 10, lg: 20 }}>
          <Table variant="simple" size="xs">
            <Thead>
              <Tr>
                <Th>Nombre y Apellido</Th>
                <Th textAlign={"center"}>Codigo de invitacion</Th>
                <Th textAlign={"end"}>email</Th>
              </Tr>
            </Thead>
            <Attendee />
          </Table>
        </TableContainer>
      </Hide>

      <Show below="md">
        <OrderedList my={5} px={8}>
          <ListItem
            borderBottomColor="gray.100"
            borderBottomWidth={1}
            borderBottomStyle="solid"
            py={2}
          >
            <GridItem p={2}>
              <ListIcon as={StarIcon} color="green.500" /> Lesther gonzalez
            </GridItem>
            <GridItem p={2}>
              <ListIcon as={CheckCircleIcon} color="green.500" /> ASDBASD12ASDAS
            </GridItem>
            <GridItem p={2}>
              <ListIcon as={EmailIcon} color="green.500" /> asdasd@gmail.com
            </GridItem>
          </ListItem>
        </OrderedList>
      </Show>
    </Box>
  );
};

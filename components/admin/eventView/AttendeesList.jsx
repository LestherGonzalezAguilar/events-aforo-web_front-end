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
  Flex,
} from "@chakra-ui/react";

import { AttendeeDesktop } from "./AttendeeDesktop";
import { AttendeeMobile } from "./AttendeeMobile";

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
            <AttendeeDesktop />
          </Table>
        </TableContainer>
      </Hide>

      <Show below="md">
        <OrderedList my={5} px={8}>
          <AttendeeMobile />
        </OrderedList>
      </Show>
    </Box>
  );
};

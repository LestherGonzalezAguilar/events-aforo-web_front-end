import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { Attendee } from "./Attendee";

export const AttendeesList = () => {
  return (
    <Box px={20} my={12}>
      <Text as="b" mr={12}>
        Listado de inscriptos
      </Text>
      <Text as="b" mr={12}>
        Cantidad: 80
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre y Apellido</Th>
              <Th>Codigo de invitacion</Th>
              <Th isNumeric>email</Th>
            </Tr>
          </Thead>
          <Attendee />
        </Table>
      </TableContainer>
    </Box>
  );
};

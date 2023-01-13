import { Tbody, Td, Tr } from "@chakra-ui/react";

export const Attendee = () => {
  return (
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
    </Tbody>
  );
};

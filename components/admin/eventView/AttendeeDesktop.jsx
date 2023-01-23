import { Tbody, Td, Tr } from "@chakra-ui/react";

export const AttendeeDesktop = () => {
  return (
    <Tbody>
      <Tr
        background="gray.100"
        borderBottom={20}
        borderColor="white"
        borderStyle="solid"
      >
        <Td p={{ base: 2, lg: 3 }}>Lesther el crack gonzalez</Td>
        <Td p={{ base: 2, lg: 3 }} textAlign={"center"}>
          ASDBASD12ASDAS
        </Td>
        <Td p={{ base: 2, lg: 3 }} textAlign={"end"}>
          asdasd@gmail.com
        </Td>
      </Tr>

      <Tr
        background="gray.100"
        borderBottom={20}
        borderColor="white"
        borderStyle="solid"
      >
        <Td p={{ base: 2, lg: 3 }}>Lesther el crack gonzalez</Td>
        <Td p={{ base: 2, lg: 3 }} textAlign={"center"}>
          ASDBASD12ASDAS
        </Td>
        <Td p={{ base: 2, lg: 3 }} textAlign={"end"}>
          asdasd@gmail.com
        </Td>
      </Tr>
    </Tbody>
  );
};

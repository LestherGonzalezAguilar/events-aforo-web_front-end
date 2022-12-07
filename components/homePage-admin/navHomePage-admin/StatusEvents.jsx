import {  Center, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const StatusEvents = () => {
  return (
    <Flex pt={5}>
      <Center mx={2}>
        <Text color="primary">
          Activos: <b>12</b>
        </Text>
      </Center>
      <Center mx={2}>
        <Text color="primary">
          Finalizados: <b>12</b>
        </Text>
      </Center>
      <Center mx={2}>
        <Text color="primary">
          Total de eventos: <b>12</b>
        </Text>
      </Center>
    </Flex>
  );
};

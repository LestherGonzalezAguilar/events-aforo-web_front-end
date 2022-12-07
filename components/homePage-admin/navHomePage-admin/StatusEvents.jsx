import {  Center, Spacer, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const StatusEvents = () => {
  return (
    <Flex pt={5}>
      <Spacer />
      <Center mx={2}>
        <Flex>
          Activos: <Text as="b" color={"green"} ml={1}>12</Text>
        </Flex>
      </Center>
      <Center mx={2}>
      <Flex>
          Finalizados: <Text as="b" color={"red"} ml={1}>12</Text>
        </Flex>
      </Center>
      <Center mx={2}>
      <Flex>
          Total de eventos: <Text as="b" color={"blue"} ml={1}>12</Text>
        </Flex>
      </Center>
    </Flex>
  );
};

import { useEffect, useState } from "react";
import { Center, Spacer, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { data } from "../../../data/events";

export const StatusEvents = () => {
  const [eventsData, setEventsData] = useState();

  useEffect(() => {
    handleData();
  });

  const handleData = async () => {
    await setEventsData(data);
  };

  return (
    <Flex pt={5}>
      <Spacer />
      <Center mx={2}>
        <Flex>
          Activos:
          <Text as="b" color={"green"} ml={1}>
            {eventsData.filter((event) => event.state === true).length}
          </Text>
        </Flex>
      </Center>
      <Center mx={2}>
        <Flex>
          Finalizados:
          <Text as="b" color={"red"} ml={1}>
            {eventsData.filter((event) => event.state === false).length}
          </Text>
        </Flex>
      </Center>
      <Center mx={2}>
        <Flex>
          Total de eventos:
          <Text as="b" color={"blue"} ml={1}>
            {eventsData.length}
          </Text>
        </Flex>
      </Center>
    </Flex>
  );
};

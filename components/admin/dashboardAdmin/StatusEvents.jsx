import { useEffect, useState } from "react";
import { Center, Heading, Hide, Spacer, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { data } from "../../../api/events";
import { useStatusEvents } from "../../../hooks/useStatusEvents";

export const StatusEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [eventsActive, eventsFinished] = useStatusEvents(eventsData);
  
  useEffect(() => {
    handleData();
  });

  const handleData = () => {
    setEventsData(data);
  };

  return (
    <Flex pt={5}>
      <Hide below="lg">
        <Spacer />
      </Hide>
      <Center mx={2}>
        <Flex>
          <h5>Activos:</h5>
          <Text as="b" color={"green"} ml={1}>
            {eventsActive?.length}
          </Text>
        </Flex>
      </Center>
      <Center mx={2}>
        <Flex>
          <h5> Finalizados:</h5>
          <Text as="b" color={"red"} ml={1}>
            {eventsFinished?.length}
          </Text>
        </Flex>
      </Center>
      <Center mx={2}>
        <Flex alignItems="center" justifyItems="initial">
          <h5> Total: </h5>
          <Text as="b" color={"blue"} ml={1}>
            {eventsData?.length}
          </Text>
        </Flex>
      </Center>
    </Flex>
  );
};

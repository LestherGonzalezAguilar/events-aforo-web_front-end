import { useState } from "react";
import Image from "next/image";

import { Box, SimpleGrid, Heading, Flex, Center } from "@chakra-ui/react";

import { EventCard } from "./EventCard";
import Logo from "../../../assets/logoblackandwhite.svg";

export const EventsView = () => {
  const [events, setEvents] = useState(true);

  return (
    <Box mt={10}>
      {events ? (
        <>
          <Heading as="h1" size="lg" color="green" mt={20}>
            Activos
          </Heading>
          <Box pt={10}>
            <SimpleGrid columns={4} spacingY="50px" pt={10}>
              <EventCard eventState={true} />
              <EventCard eventState={true} />
              <EventCard eventState={true} />
              <EventCard eventState={true} />
            </SimpleGrid>
          </Box>

          <Heading as="h1" size="lg" color="red" mt={20}>
            Finalizados
          </Heading>

          <SimpleGrid columns={4} spacingY="50px" pt={10}>
            <EventCard eventState={false} />
            <EventCard eventState={false} />
            <EventCard eventState={false} />
            <EventCard eventState={false} />
            <EventCard eventState={false} />
            <EventCard eventState={false} />
            <EventCard eventState={false} />
          </SimpleGrid>
        </>
      ) : (
        <>
          <Center>
            <Flex pt={20}>
              <Image src={Logo} alt="Picture of the author" width={400} />
            </Flex>
          </Center>
        </>
      )}
    </Box>
  );
};

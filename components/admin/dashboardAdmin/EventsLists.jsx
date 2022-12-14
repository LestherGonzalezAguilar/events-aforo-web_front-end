import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  SimpleGrid,
  Heading,
  Flex,
  Center,
  Button,
  Grid,
} from "@chakra-ui/react";
import { EventCard } from "./EventCard";
import Logo from "../../../assets/logoblackandwhite.svg";
import { data } from "../../../api/events";
import { useStatusEvents } from "../../../hooks/useStatusEvents";

export const EventsLists = ({ filterState }) => {
  const [eventsData, setEventsData] = useState();

  const [eventsActive, eventsFinished] = useStatusEvents(eventsData);

  useEffect(() => {
    handleData();
  });

  const handleData = () => {
    setEventsData(data);
  };

  return (
    <Box mt={10}>
      {eventsData ? (
        <>
          {(filterState === "activos" || filterState === "todos") && (
            <Box>
              <Heading as="h1" size="lg" color="green" mt={20}>
                Activos
              </Heading>
              <Box pt={10}>
                <SimpleGrid columns={4} spacingY="50px" pt={10}>
                  {eventsActive?.map((event) => (
                    <EventCard {...event} key={event.id} state={"false"} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}

          {(filterState === "finalizados" || filterState === "todos") && (
            <Box>
              <Heading as="h1" size="lg" color="red" mt={20}>
                Finalizados
              </Heading>
              <Box pt={10}>
                <SimpleGrid columns={4} spacingY="50px" pt={10}>
                  {eventsFinished?.map((event) => (
                    <EventCard {...event} key={event.id} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}
        </>
      ) : (
        <>
          <Center>
            <Grid>
              <Flex pt={20}>
                <Image src={Logo} alt="Picture of the author" width={350} />
              </Flex>
              <Button mt={5} colorScheme="blue" size="md">
                Crea un evento
              </Button>
            </Grid>
          </Center>
        </>
      )}
    </Box>
  );
};

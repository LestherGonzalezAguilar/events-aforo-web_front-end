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
import { data } from "../../../data/events";

export const EventsLists = ({ filterState }) => {
  const [eventsData, setEventsData] = useState();
  const [eventsActive, setEventsActive] = useState();
  const [eventsFinished, setEventsFinished] = useState();

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let date = today.getFullYear() + "-" + month + "-" + day;

  useEffect(() => {
    handleData();
  });

  useEffect(() => {
    divideEvent();
  }, [eventsData]);

  const handleData = () => {
    setEventsData(data);
  };

  const divideEvent = () => {
    let eventsActives = eventsData?.filter((event) => event.date_time >= date);
    let eventsFinishes = eventsData?.filter((event) => event.date_time < date);
    setEventsActive(eventsActives);
    setEventsFinished(eventsFinishes);
  };

  return (
    <Box mt={10}>
      {eventsData ? (
        <>
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

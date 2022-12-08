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

  useEffect(() => {
    handleData();
  });

  const handleData = async () => {
    await setEventsData(data);
  };

  return (
    <Box mt={10}>
      {eventsData ? (
        <>
          {filterState !== "finalizados" ? (
            <Box>
              <Heading as="h1" size="lg" color="green" mt={20}>
                Activos
              </Heading>
              <Box pt={10}>
                <SimpleGrid columns={4} spacingY="50px" pt={10}>
                  {eventsData
                    .filter((event) => event.state === true)
                    .map((event) => (
                      <EventCard {...event} key={event.id} />
                    ))}
                </SimpleGrid>
              </Box>
            </Box>
          ) : (
            <></>
          )}

          {filterState !== "activos" ? (
            <Box>
              <Heading as="h1" size="lg" color="red" mt={20}>
                Finalizados
              </Heading>
              <Box pt={10}>
                <SimpleGrid columns={4} spacingY="50px" pt={10}>
                  {eventsData
                    .filter((event) => event.state === false)
                    .map((event) => (
                      <EventCard {...event} key={event.id} />
                    ))}
                </SimpleGrid>
              </Box>
            </Box>
          ) : (
            <></>
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

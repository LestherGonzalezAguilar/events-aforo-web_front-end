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
import { useStatusEvents } from "../../../hooks/useStatusEvents";
import { data } from "../../../api/events";

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
      {data ? (
        <>
          {(filterState === "activos" || filterState === "todos") && (
            <Box>
              <Heading
                color="green"
                mt={{ base: 12, lg: 20 }}
                as="h2"
                size={{ base: "2xl", md: "lg" }}
                textAlign={{ base: "center", md: "initial" }}
              >
                Activos
              </Heading>
              <Box pt={{ base: 3, lg: 10 }} justifyContent="center">
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                  spacingY="50px"
                  pt={10}
                  justifyItems="center"
                >
                  {eventsActive?.map((event) => (
                    <EventCard {...event} key={event.id} state={"false"} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}

          {(filterState === "finalizados" || filterState === "todos") && (
            <Box>
              <Heading
                color="red"
                mt={{ base: 12, lg: 20 }}
                as="h2"
                size={{ base: "2xl", md: "lg" }}
                textAlign={{ base: "center", md: "initial" }}
              >
                Finalizados
              </Heading>
              <Box pt={10} justifyContent="center">
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                  spacingY="50px"
                  pt={10}
                  justifyItems="center"
                >
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

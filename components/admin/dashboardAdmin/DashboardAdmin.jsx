import { useState } from "react";
import { Box, Text, Grid, Heading } from "@chakra-ui/react";
import { StatusEvents } from "./StatusEvents";
import { EventsLists } from "./EventsLists";
import { FilterEvents } from "./FilterEvents";
import Head from "next/head";

export const DashboardAdmin = () => {
  const [filterStateFinal, setFilterStateFinal] = useState("todos");

  const addMensaje = (filterState) => {
    setFilterStateFinal(filterState);
  };

  return (
    <main>
      <Head>
        <title>Panel del organizador</title>
        <meta name="description" content="Dashboard, panel del organizador" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>

      <section>
        <Box p={{base: 3, md: 5 ,lg:10}}>
          <Heading my={5} textAlign={{base: "center", lg: "initial"}}>
            <Text as="u" fontSize="xl">
              Resumen de eventos
            </Text>
          </Heading>

          <nav>
            <Grid flexDirection={{ base: 'column', md: 'row', lg: 'row' }} templateColumns={{lg: "repeat(2, 1fr)"}} >
              <FilterEvents addMensaje={addMensaje} />
              <StatusEvents />
            </Grid>
          </nav>

          <EventsLists filterState={filterStateFinal} />
        </Box>
      </section>
    </main>
  );
};

import { useState } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
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
    <div>

      <Head>
        <title>Panel del organizador</title>
        <meta name="description" content="Dashboard, panel del organizador" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>

      <section>
        <Box p={20}>
          <h3>
            <Text as="u" fontSize="xl">
              Resumen de eventos
            </Text>
          </h3>

          <nav>
            <Grid templateColumns="repeat(2, 1fr)">
              <FilterEvents addMensaje={addMensaje} />
              <StatusEvents />
            </Grid>
          </nav>

          <EventsLists filterState={filterStateFinal} />
        </Box>
      </section>
    </div>
  );
};

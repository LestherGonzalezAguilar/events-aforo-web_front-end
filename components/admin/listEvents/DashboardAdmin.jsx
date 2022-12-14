import { useState } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { StatusEvents } from "./StatusEvents";
import { EventsLists } from "./EventsLists";
import { FilterEvents } from "./FilterEvents";

export const DashboardAdmin = () => {
  const [filterStateFinal, setFilterStateFinal] = useState("todos");

  const addMensaje = (filterState) => {
    setFilterStateFinal(filterState);
  };

  return (
    <div>
      <Box p={20}>
        <Text as="u" fontSize="xl">
          Resumen de eventos
        </Text>

        <Grid templateColumns="repeat(2, 1fr)">
          <FilterEvents addMensaje={addMensaje} />
          <StatusEvents />
        </Grid>

        <EventsLists filterState={filterStateFinal} />
      </Box>
    </div>
  );
};

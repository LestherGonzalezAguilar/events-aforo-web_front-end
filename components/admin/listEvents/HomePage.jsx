import Image from "next/image";
import { Box, Text, Grid, Button } from "@chakra-ui/react";
import FilterIcon from "../../../assets/filter.svg";
import { StatusEvents } from "./StatusEvents";
import { EventsLists } from "./EventsLists";
import { useState } from "react";

export const HomePage = () => {
  const [filterState, setFilterState] = useState("todos");

  return (
    <div>
      <Box p={20}>
        <Text as="u" fontSize="xl">
          Resumen de eventos
        </Text>

        <Grid templateColumns="repeat(2, 1fr)">
          <Grid templateColumns="repeat(2, 1fr)">
            <Box mt={4}>
              <Button
                onClick={() => setFilterState("activos")}
                colorScheme="teal"
                variant="outline"
                mr={2}
              >
                Activos
              </Button>
              <Button
                onClick={() => setFilterState("finalizados")}
                colorScheme="red"
                variant="outline"
                mr={2}
              >
                Finalizados
              </Button>
              <Button
                onClick={() => setFilterState("todos")}
                colorScheme="purple"
                variant="outline"
                mr={2}
              >
                Todos
              </Button>
              <Button colorScheme="black" variant="ghost" mr={2}>
                <Image
                  src={FilterIcon}
                  height={20}
                  alt="filter icon"
                  style={{ marginRight: "8px" }}
                />
                Filtro
              </Button>
            </Box>
          </Grid>
          <StatusEvents />
        </Grid>

        <EventsLists filterState={filterState} />
      </Box>
    </div>
  );
};

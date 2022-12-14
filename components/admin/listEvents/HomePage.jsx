import Image from "next/image";
import { Box, Text, Grid, Button, Flex, Center } from "@chakra-ui/react";
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
            <Flex mt={4}>
              <Button
                onClick={() => setFilterState("activos")}
                colorScheme="teal"
                variant={filterState === "activos" ? "solid" : "outline"}
                mr={2}
              >
                Activos
              </Button>
              <Button
                onClick={() => setFilterState("finalizados")}
                colorScheme="red"
                variant={filterState === "finalizados" ? "solid" : "outline"}
                mr={2}
              >
                Finalizados
              </Button>
              <Button
                onClick={() => setFilterState("todos")}
                colorScheme="purple"
                variant={filterState === "todos" ? "solid" : "outline"}
                mr={5}
              >
                Todos
              </Button>
              <Flex>
                <Center>
                  <Image
                    src={FilterIcon}
                    height={20}
                    alt="filter icon"
                    style={{ marginRight: "8px" }}
                  />
                  Filtro
                </Center>
              </Flex>
            </Flex>
          </Grid>
          <StatusEvents />
        </Grid>

        <EventsLists filterState={filterState} />
      </Box>
    </div>
  );
};

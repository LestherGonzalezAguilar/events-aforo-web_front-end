import React, { useState } from "react";
import Image from "next/image";
import { Button, Center, Flex, Grid, Hide, Show } from "@chakra-ui/react";

import FilterIcon from "../../../assets/filter.svg";

export const FilterEvents = ({ addMensaje }) => {
  const [filterState, setFilterState] = useState("todos");

  const changeStateFilter = (state) => {
    setFilterState(state);
    addMensaje(state);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Flex mt={4}>
        <Button
          onClick={() => changeStateFilter("todos")}
          colorScheme="purple"
          variant={filterState === "todos" ? "solid" : "outline"}
          mr={5}
        >
          Todos
        </Button>
        <Button
          onClick={() => changeStateFilter("activos")}
          colorScheme="teal"
          variant={filterState === "activos" ? "solid" : "outline"}
          mr={2}
        >
          Activos
        </Button>
        <Button
          onClick={() => changeStateFilter("finalizados")}
          colorScheme="red"
          variant={filterState === "finalizados" ? "solid" : "outline"}
          mr={2}
        >
          Finalizados
        </Button>
        <Hide below="lg">
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
        </Hide>
      </Flex>
    </Grid>
  );
};

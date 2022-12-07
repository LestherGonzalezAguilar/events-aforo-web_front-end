import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import FilterIcon from "../../../assets/filter.svg"

export const FilterNav = () => {
  return (
    <Box mt={4}>
      <Button colorScheme="teal" variant="outline" mr={2}>
        Activos
      </Button>
      <Button colorScheme="red" variant="outline" mr={2}>
        Finalizados
      </Button>
      <Button colorScheme="purple" variant="outline" mr={2}>
        Todos
      </Button>
      <Button colorScheme="black" variant="ghost" mr={2}>
        <Image src={FilterIcon} height={20} alt="filter icon" style={{marginRight: "8px"}}/>
        Filtro
      </Button>
    </Box>
  );
};

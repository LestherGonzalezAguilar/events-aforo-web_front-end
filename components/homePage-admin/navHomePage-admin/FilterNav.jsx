import { Box, Button } from "@chakra-ui/react";

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
        Filtro
      </Button>
    </Box>
  );
};

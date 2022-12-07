import { Box, Heading } from "@chakra-ui/react";
import { EventCard } from "./EventCard";

export const EventsView = () => {
  return (
    <Box mt={10}>
      <Heading  as='h1' size='md' color="green" textDecoration="">Activos</Heading>
      <Box pt={10}>

      </Box>
      <Heading  as='h1' size='md' color="red" textDecoration="">Finalizados</Heading>
      <Box pt={10}>
        <EventCard />
      </Box>
    </Box>
  );
};

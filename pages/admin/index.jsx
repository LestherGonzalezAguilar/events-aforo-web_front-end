import { Box, Text } from "@chakra-ui/react";
import { EventsView } from "../../components/homePage-admin/eventsView/EventsView";
import { NavbarEvent } from "../../components/homePage-admin/navHomePage-admin/NavbarEvent";

const index = () => {
  return (
    <Box p={20}>
      <Text as="u" fontSize="xl" >
        Resumen de eventos
      </Text>
      <NavbarEvent />
      <EventsView />
    </Box>
  );
};

export default index;

import { Box, Text } from "@chakra-ui/react";
import { NavbarEvent } from "../../components/admin/headerHomePage-admin/NavbarEvent";
import { EventsLists } from "../../components/admin/listEvents/EventsLists";
import { NavBar } from "../../components/admin/navbar/NavBar";

const index = () => {
  return (
    <Box>
      <NavBar />
      <Box p={20}>
        <Text as="u" fontSize="xl">
          Resumen de eventos
        </Text>
        <NavbarEvent />
        <EventsLists />
      </Box>
    </Box>
  );
};

export default index;

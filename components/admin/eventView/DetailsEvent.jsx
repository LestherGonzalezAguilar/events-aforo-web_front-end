import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Badge,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { AttendeesList } from "./AttendeesList";

export const DetailsEvent = () => {
  return (
    <div>
      <Box>
        <Flex mr={20} my={10}>
          <Spacer />
          <Button variant="link" colorScheme="red" size="lg" fontSize="2xl">
            <EditIcon mr={3}/>
            Editar
          </Button>
        </Flex>

        <Flex px={20}>
          <Box>
            <Heading as="h1" size="2xl">
              Nombre del evento
            </Heading>

            <Grid mb={8}>
              <Text color="blue.600" as="b" mt={2}>
                Lunes 21 de diciembre
              </Text>
              <Text as="b" mt={2}>
                Hora: 21:00hs
              </Text>
              <Text mt={2}>Capacidad: 120 personas</Text>
            </Grid>
            <Divider />
          </Box>

          <Spacer />

          <Flex pt={3}>
            <Text as="b" mr={2}>
              Categoria:
            </Text>
            <Box>
              <Badge borderRadius="full" px="4" py="1" colorScheme="green">
                Concierto musical
              </Badge>
            </Box>
          </Flex>
        </Flex>

        <Box>
          <AttendeesList />
        </Box>
      </Box>
    </div>
  );
};

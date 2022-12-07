import {
  Image,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Spacer,
  Badge,
  Box,
} from "@chakra-ui/react";

export const EventCard = ({ eventState = false }) => {
  let filter = "";

  if (eventState) {
    filter = "";
  }

  if (!eventState) {
    filter = "grayscale(80%)";
  }

  return (
    <Card maxW="xs" filter={filter}>
      <Box display="flex" alignItems="baseline" pl={5} mt={-2}>
        <Badge borderRadius="full" px="4" py="1" colorScheme="blue">
          Concierto musical
        </Badge>
      </Box>
      <CardBody>
        <Image
          src="https://definicion.de/wp-content/uploads/2009/09/concierto.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Nombre del Evento</Heading>
          <Text color="blue.600" as="b">
            Lunes 21 de diciembre
          </Text>
          <Text as="b">Hora: 21:00hs</Text>
          <Text>Capacidad: 120 personas</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Spacer />
        <Button variant="outline" colorScheme="blue">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

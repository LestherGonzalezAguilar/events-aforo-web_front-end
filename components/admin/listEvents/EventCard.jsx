import { AddIcon } from "@chakra-ui/icons";
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

export const EventCard = (props) => {
  
  const { state, category, name, date, image, time, capacity } = props;

  let filter = "";

  if (state) {
    filter = "";
  }

  if (!state) {
    filter = "grayscale(80%)";
  }

  return (
    <Card maxW="xs" filter={filter}>
      <Box display="flex" alignItems="baseline" pl={5} mt={-2}>
        <Badge borderRadius="full" px="4" py="1" colorScheme="blue">
          {category}
        </Badge>
      </Box>
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text color="blue.600" as="b">
            {date}
          </Text>
          <Text as="b">Hora: {time}</Text>
          <Text>Capacidad: {capacity} personas</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Spacer />
        <Button variant="outline" colorScheme="blue">
          <AddIcon mr={2} />
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

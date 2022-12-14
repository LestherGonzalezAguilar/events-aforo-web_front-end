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
import { useEffect, useState } from "react";

export const EventCard = (props) => {
  const {
    id_categories,
    name,
    date_time,
    img,
    capacity,
    state = false,
  } = props;

  let filter = "";

  if (state) {
    filter = "";
  }

  if (!state) {
    filter = "grayscale(80%)";
  }

  const [category, setCategory] = useState();
  const [colorCategory, setColorCategory] = useState();

  useEffect(() => {
    if (id_categories === 1) {
      setCategory("Concierto musical");
      setColorCategory("blue");
    }
    if (id_categories === 2) {
      setCategory("Conferencia");
      setColorCategory("green");
    }
    if (id_categories === 3) {
      setCategory("Moda y belleza");
      setColorCategory("pink");
    }
    if (id_categories === 4) {
      setCategory("Tecnologías");
      setColorCategory("purple");
    }
  }, [id_categories]);

  return (
    <article>
      <Card maxW="xs" filter={filter}>
        <Box display="flex" alignItems="baseline" pl={5} mt={-2}>
          <Badge borderRadius="full" px="4" py="1" colorScheme={colorCategory}>
            {category}
          </Badge>
        </Box>
        <CardBody>
          <Image
            src={img}
            alt={name}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text color="blue.600" as="b">
              {date_time}
            </Text>
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
    </article>
  );
};

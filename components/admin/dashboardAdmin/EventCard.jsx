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
import moment from "moment/moment";
import "moment/locale/es";
import Link from "next/link";

export const EventCard = (props) => {
  const {
    id,
    name,
    date_time,
    place,
    capacity,
    img,
    category,
    state = false,
  } = props;

  let filter = "";

  if (!state) {
    filter = "grayscale(80%)";
  }

  moment.locale('es');

  const date = moment(date_time).format("LL");
  const hour = moment(date_time).format("LT");

  return (
    <article key={id}>
      <Card
        href="admin/event/12344123"
        w="xs"
        filter={filter}
        as={Link}
        style={{ textDecoration: "none" }}
        _hover={{ transform: "scale(1.02)" }}
        transition="all 0.25s ease-out"
      >
        <Box display="flex" alignItems="baseline" pl={5} mt={-2}>
          <Badge borderRadius="full" px="4" py="1" background={category.color}>
            {category.name}
          </Badge>
        </Box>
        <CardBody>
          <Image
            src={img}
            alt={name}
            borderRadius="lg"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text color="blue.600" as="b">
              {date}
            </Text>
            <Text>
              Hora:
              <Text ml={1} color="red.400" as="b">
                {hour} hs
              </Text>
            </Text>
            <Text>Capacidad: {capacity} personas</Text>
            <Text>Lugar: {place}</Text>
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

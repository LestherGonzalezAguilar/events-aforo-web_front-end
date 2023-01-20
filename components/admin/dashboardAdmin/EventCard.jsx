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
import Link from "next/link";
import { useEffect, useState } from "react";

export const EventCard = (props) => {
  const {
    id,
    name,
    date,
    hour,
    capacity,
    img,
    category,
    state = false,
  } = props;

  let filter = "";

  if (!state) {
    filter = "grayscale(80%)";
  }

  return (
    <article key={id}>
      <Card w="xs" filter={filter}>
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
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Spacer />
          <Link href="admin/event/1">
            <Button variant="outline" colorScheme="blue">
              <AddIcon mr={2} />
              Ver detalles
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
};

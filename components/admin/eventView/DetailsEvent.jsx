import Image from "next/image";
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
import { data } from "../../../api/events";
import Head from "next/head";

export const DetailsEvent = () => {
  return (
    <div>
      <Head>
        <title>Aforify | Evento: </title>
        <meta name="description" content="Evento" />
      </Head>
      <Box
        maxWidth="1680px"
        margin="auto"
        mb={5}
        width={{ base: "100%", md: "80%", lg: "70%" }}
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Box ratio={16 / 9} objectFit={"cover"} background={"black"} my={10}>
          <Image
            src={"https://i.ytimg.com/vi/YlUKcNNmywk/maxresdefault.jpg"}
            alt={"asd"}
            width={100}
            height={100}
            layout="responsive"
            quality={100}
            priority={true}
          />
        </Box>
        <Flex mr={{ base: 8, lg: 20 }} my={10}>
          <Spacer />
          <Button
            variant="solid"
            colorScheme={"red"}
            background={"red.400"}
            size="lg"
            fontSize="2xl"
            color={"white"}
          >
            <EditIcon mr={3} />
            Editar
          </Button>
        </Flex>

        <Flex
          px={{ base: 8, lg: 20 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Heading as="h1" size="2xl">
              Nombre del evento
            </Heading>

            <Grid mb={8}>
              <Text color="blue.600" as="b" mt={2}>
                Lunes 21 de diciembre
              </Text>

              <Flex mt={2}>
                <Text as="b" mr={1}>
                  Hora:
                </Text>
                <Text color="red" as="b">
                  21:00hs
                </Text>
              </Flex>

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

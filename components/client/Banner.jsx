import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import bannerSVG from "../../assets/banner.svg";

export const Banner = () => {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={4}
        alignItems="center"
        justifyItems="center"
        my={4}
      >
        <Box width={{ base: "80%" }}>
          <Image src={bannerSVG} alt="Banner aforify" height="fill" />
        </Box>
        <Flex
          justifyContent="center"
          flexDirection="column"
          width={{ base: "80%", lg: "60%" }}
        >
          <Box
            fontWeight="semibold"
            fontSize={{ base: "xl", md: "xl", lg: "xl", xl: "2xl" }}
          >
            En{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "#4548EB",
                fontStyle: "italic",
              }}
            >
              afori
            </span>
            <span
              style={{
                fontWeight: "bold",
                color: "#F26D73",
                fontStyle: "italic",
              }}
            >
              fy
            </span>
            , puedes asistir, crear y administrar tus eventos para bodas,
            conciertos musicales, conferencias entre otros.
          </Box>
          <Flex gap={4} color="white" my={4}>
            <Link style={{ width: "100%" }} href="/admin/create-event">
              <Button
                width="100%"
                backgroundColor="#4548EB"
                _hover={{ backgroundColor: "#3639C0" }}
                fontSize={18}
              >
                Crear evento
              </Button>
            </Link>
            <Link style={{ width: "100%" }} href="#events">
              <Button
                width="100%"
                backgroundColor="#F26D73"
                _hover={{ backgroundColor: "#CA4F55" }}
                fontSize={18}
              >
                Eventos
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
};

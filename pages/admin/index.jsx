import { Box } from "@chakra-ui/react";
import { NavBar } from "../../components/admin/navbar/NavBar";
import { HomePage } from "../../components/admin/listEvents/HomePage";

const index = () => {
  return (
    <>
      <Box>
        <NavBar />
        <HomePage />
      </Box>
    </>
  );
};

export default index;

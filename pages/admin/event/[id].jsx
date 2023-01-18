import { Box } from "@chakra-ui/react";
import { DetailsEvent } from "../../../components/admin/eventView/DetailsEvent";
import { NavBar } from "../../../components/admin/navbar/NavBar";

const index = () => {
  return (
    <>
      <Box>
        <NavBar />
        <DetailsEvent />
      </Box>
    </>
  );
};

export default index;

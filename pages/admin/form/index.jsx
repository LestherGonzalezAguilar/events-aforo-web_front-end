import { Box } from "@chakra-ui/react";
import { FormCreateEvents } from "../../../components/admin/formAdmin/FormCreateEvents";
import { NavBar } from "../../../components/admin/navbar/NavBar";

const index = () => {
  return (
    <>
      <Box>
        <NavBar />
        <FormCreateEvents />
      </Box>
    </>
  );
};

export default index;

import { Box } from "@chakra-ui/react";
import { FormLoginAdmin } from "../../../components/admin/formAdmin/FormLoginAdmin";
import { NavBar } from "../../../components/admin/navbar/NavBar";

const index = () => {
  return (
    <>
      <Box>
        <NavBar />
        <FormLoginAdmin />
      </Box>
    </>
  );
};

export default index;

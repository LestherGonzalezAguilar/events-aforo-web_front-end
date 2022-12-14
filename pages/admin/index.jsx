import { Box } from "@chakra-ui/react";
import { NavBar } from "../../components/admin/navbar/NavBar";
import { DashboardAdmin } from "../../components/admin/listEvents/DashboardAdmin";

const index = () => {
  return (
    <>
      <Box>
        <NavBar />
        <DashboardAdmin />
      </Box>
    </>
  );
};

export default index;

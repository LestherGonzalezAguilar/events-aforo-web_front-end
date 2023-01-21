import { Box } from "@chakra-ui/react";
import { DashboardAdmin } from "../../components/admin/dashboardAdmin/DashboardAdmin";
import { NavBar } from "../../components/admin/navBar/NavBar";

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

import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { DashboardAdmin } from "../../components/admin/dashboardAdmin/DashboardAdmin";
import { Layout } from "../../components/admin/Layout";
import { NavBar } from "../../components/admin/navBar/NavBar";

const index = () => {
  return (
    <>
      <Head>
        <title>Aforify | Admin</title>
        <meta name="description" content="Dashboard, panel del organizador" />
      </Head>
      <Box>
        <Layout>
          <DashboardAdmin />
        </Layout>
      </Box>
    </>
  );
};

export default index;

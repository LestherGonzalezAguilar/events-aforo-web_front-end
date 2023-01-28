import Head from "next/head";
import { DashboardAdmin } from "../../components/admin/dashboardAdmin/DashboardAdmin";
import { Layout } from "../../components/admin/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Aforify | Admin</title>
        <meta name="description" content="Dashboard, panel del organizador" />
      </Head>
      <Layout>
        <DashboardAdmin />
      </Layout>
    </>
  );
};

export default index;

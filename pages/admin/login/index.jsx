import Head from "next/head";
import { FormLoginAdmin } from "../../../components/admin/formAdmin/FormLoginAdmin";
import { Layout } from "../../../components/admin/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Aforify | Login </title>
        <meta
          name="description"
          content="Inicia sesion para poder crear y gestionar eventos"
        />
      </Head>
      <Layout>
        <FormLoginAdmin />
      </Layout>
    </>
  );
};

export default index;

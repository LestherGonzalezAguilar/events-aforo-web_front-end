import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FormLoginAdmin } from "../../../components/admin/formAdmin/FormLoginAdmin";
import { Layout } from "../../../components/admin/Layout";
import { NavBar } from "../../../components/admin/navbar/NavBar";

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

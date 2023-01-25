import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FormCreateEvents } from "../../../components/admin/formAdmin/FormCreateEvents";
import { Layout } from "../../../components/admin/Layout";
import { NavBar } from "../../../components/admin/navbar/NavBar";

const index = () => {
  return (
    <>
      <Head>
        <title>Aforify | Admin-form</title>
        <meta name="description" content="formulario del organizador" />
      </Head>
      <Layout>
        <FormCreateEvents />
      </Layout>
    </>
  );
};

export default index;

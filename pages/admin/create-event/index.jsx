import Head from "next/head";
import { FormCreateEvents } from "../../../components/admin/formAdmin/FormCreateEvents";
import { Layout } from "../../../components/admin/Layout";

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

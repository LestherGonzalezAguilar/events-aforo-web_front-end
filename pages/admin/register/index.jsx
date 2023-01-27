import Head from "next/head";
import { FormRegisterAdmin } from "../../../components/admin/formAdmin/FormRegisterAdmin";
import { Layout } from "../../../components/admin/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Aforify | Registro </title>
        <meta
          name="description"
          content="Inicia sesion para poder crear y gestionar eventos"
        />
      </Head>
      <Layout>
        <FormRegisterAdmin />
      </Layout>
    </>
  );
};

export default index;

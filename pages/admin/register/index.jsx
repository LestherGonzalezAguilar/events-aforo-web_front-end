import Head from "next/head";
import { FormRegisterAdmin } from "../../../components/admin/formAdmin/FormRegisterAdmin";
import { Layout } from "../../../components/admin/Layout";
import { NavBar } from "../../../components/client";

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
      <NavBar />
      <FormRegisterAdmin />
    </>
  );
};

export default index;

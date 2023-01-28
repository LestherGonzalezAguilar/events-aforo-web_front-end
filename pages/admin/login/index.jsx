import Head from "next/head";
import { FormLoginAdmin } from "../../../components/admin/formAdmin/FormLoginAdmin";
import { NavBar } from "../../../components/client";

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
      <NavBar />
      <FormLoginAdmin />
    </>
  );
};

export default index;

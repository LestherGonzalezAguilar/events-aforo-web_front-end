import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useForm } from "../../../hooks/useForm";
import { InputsLayouts } from "./InputsLayouts.jsx";

const initialForm = {
  email: "",
  password: "",
  name: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "Correo no válido"],
  password: [(value) => value.length > 2, "Ingrese su contraseña"],
  name: [(value) => value.length > 2, "Ingrese un nombre de usuario"],
};

export const FormRegisterAdmin = () => {
  const router = useRouter();

  const [formSumitted, setFormSumitted] = useState(false);

  const {
    inputEmail,
    inputpassword,
    inputName,
    formState,
    onInputChange,
    isFormValid,
    emailValid,
    nameValid,
    passwordValid,
    onResetForm,
  } = useForm(initialForm, formValidation);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSumitted(true);
    if (!isFormValid) return;

    // console.log(formState);

    setTimeout(() => {
      router.push("/admin");
    }, 2200);
  };

  return (
    <Box maxWidth={"800px"} mx="auto" px="5" mb={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="10" flexDirection="column">
          <Box>
            <Heading
              fontSize="5xl"
              textAlign="center"
              mt={{ base: 10, lg: 20 }}
              mb={{ base: 5 }}
            >
              Registrarse
            </Heading>
          </Box>

          <InputsLayouts
            label={"Name"}
            inputName={"name"}
            inputValue={inputName}
            onInputChange={onInputChange}
            placeholder={"Agregue el nombre de usuario que desee"}
            iserror={!!nameValid && formSumitted}
            errorText={nameValid}
            autoComplete={"none"}
          />

          <InputsLayouts
            label={"Email"}
            inputName={"email"}
            inputValue={inputEmail}
            onInputChange={onInputChange}
            placeholder={"adress@gmail.com"}
            iserror={!!emailValid && formSumitted}
            errorText={emailValid}
            autoComplete={"none"}
          />

          <InputsLayouts
            label={"Contraseña"}
            inputName={"password"}
            inputValue={inputpassword}
            onInputChange={onInputChange}
            placeholder={"Contraseña"}
            iserror={!!passwordValid && formSumitted}
            errorText={passwordValid}
            type={"password"}
          />

          <Flex justifyContent="center">
            <Button backgroundColor="#4548EB" mt={{ lg: 5 }} p={0}>
              <Input
                type="submit"
                width={{ base: "200px", lg: "400px" }}
                onSubmit={handleSubmit}
                value="Registrarme"
                color="white"
                style={{ cursor: "pointer" }}
              />
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

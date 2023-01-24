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
import { InputCreateEvents } from "./InputCreateEvents";

const initialForm = {
  email: "",
  password: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "Correo no válido"],
  password: [(value) => (value.length > 2, "Ingrese su contraseña")],
};

export const FormLoginAdmin = () => {
  const router = useRouter();

  const [formSumitted, setFormSumitted] = useState(false);

  const {
    inputEmail,
    inputpassword,
    formState,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(initialForm, formValidation);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);

    setFormSumitted(true);

    if (!isFormValid) return;

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
              Iniciar Sesión
            </Heading>
            <Flex justifyContent={"center"}>
              <Center>
                <Text>¿No eres miembro?</Text>
                <Text color={"red.300"} ml={2} fontWeight={"extrabold"}>
                  <Link href={"/admin/register"}>Registrarse</Link>
                </Text>
              </Center>
            </Flex>
          </Box>

          <InputCreateEvents
            label={"Email"}
            inputName={"email"}
            inputValue={inputEmail}
            onInputChange={onInputChange}
            placeholder={"adress@gmail.com"}
            iserror={!!emailValid && formSumitted}
            errorText={emailValid}
          />

          <InputCreateEvents
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
                value="Iniciar Sesión"
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

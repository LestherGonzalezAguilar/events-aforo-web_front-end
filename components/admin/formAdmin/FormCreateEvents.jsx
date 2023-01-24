import { useState } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { useForm } from "../../../hooks/useForm";
import { InputCreateEvents } from "./InputCreateEvents";

const initialForm = {
  name: "",
  description: "",
  date: "",
  hour: "",
  capacity: "",
  img: "",
  category: "",
};

export const FormCreateEvents = () => {
  const [iserror, setIserror] = useState();

  const toast = useToast();
  const router = useRouter();

  const {
    inputImg,
    inputName,
    inputHour,
    inputDate,
    inputCapacity,
    inputDescription,
    inputCategory,
    formState,
    onInputChange,
    onResetForm,
  } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    toast({
      title: "Evento Creado",
      description: "El evento ya fue agregado a nuestra base de datos",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onResetForm();
    setTimeout(() => {
      router.push("/admin");
    }, 2200);
  };

  return (
    <Box maxWidth={"800px"} mx="auto" px="5" mb={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="8" flexDirection="column">
          <Heading textAlign="center" mt={20} mb={10}>
            Crea un nuevo evento
          </Heading>

          <InputCreateEvents
            label={"Nombre del evento:"}
            inputName={"name"}
            inputValue={inputName}
            onInputChange={onInputChange}
            placeholder={"Nombre del evento"}
            iserror={iserror}
          />

          <InputCreateEvents
            label={"Descripción"}
            inputName={"description"}
            inputValue={inputDescription}
            onInputChange={onInputChange}
            type="Textarea"
            iserror={iserror}
            placeholder="Descripción del evento"
          />

          <InputCreateEvents
            label={"Fecha de inicio"}
            inputName={"date"}
            inputValue={inputDate}
            onInputChange={onInputChange}
            type="date"
            iserror={iserror}
          />

          <InputCreateEvents
            label={"Horario"}
            inputName={"hour"}
            inputValue={inputHour}
            onInputChange={onInputChange}
            type="time"
            iserror={iserror}
          />

          <InputCreateEvents
            label={"Capacidad"}
            inputName={"capacity"}
            inputValue={inputCapacity}
            onInputChange={onInputChange}
            type="number"
            iserror={iserror}
          />

          <InputCreateEvents
            label={"Categorias"}
            inputName={"category"}
            inputValue={inputCategory}
            onInputChange={onInputChange}
            type="Select"
            iserror={iserror}
          />

          <InputCreateEvents
            label={"Cargar imagen del evento"}
            inputName={"img"}
            inputValue={inputImg}
            onInputChange={onInputChange}
            type="file"
            iserror={iserror}
            placeholder="Nombre del evento"
          />
          {formState.img !== "" && (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Box mb={1} mr={2}>
                <Text color={"green"} fontSize={"xl"}>
                  <BsFillCheckCircleFill />
                </Text>
              </Box>

              <Text textAlign={"center"}>{formState.img} </Text>
            </Flex>
          )}

          <Flex justifyContent="center">
            <Button backgroundColor="#4548EB" mt={10} p={0}>
              <Input
                type="submit"
                width={{ base: "200px", lg: "400px" }}
                onSubmit={handleSubmit}
                value="Publicar"
                color="white"
                style={{cursor: "pointer"}}
              />
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

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

const formValidation = {
  name: [
    (value) => value.length > 2,
    "El nombre debe de ser mayor a 2 caracteres.",
  ],
  description: [
    (value) => value.length > 2,
    "Agrega una description del evento",
  ],
  date: [(value) => value !== "", "Especifica la fecha del evento"],
  hour: [(value) => value !== "", "Especifica el horario del evento"],
  capacity: [(value) => value.length > 1, "Agrega la capacidad del evento"],
  img: [(value) => value.length > 2, "Agrega una imagen del evento"],
  category: [(value) => value !== "", "Elige una categoria para el evento"],
};

export const FormCreateEvents = () => {
  const toast = useToast();
  const router = useRouter();

  const [isValidation, setIsValidation] = useState({
    name: [value=> value],
    description: [value=> value],
    date: [value=> value],
    hour: [value=> value],
    capacity: [value=> value],
    img: [value=> value],
    category: [value=> value],
  });

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
    isFormValid,
    nameValid,
    descriptionValid,
    dateValid,
    hourValid,
    capacityValid,
    imgValid,
    categoryValid,
  } = useForm(initialForm, isValidation);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    
    setIsValidation(formValidation)
    console.log(isValidation);
    
    if (!isFormValid) return;

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
            iserror={nameValid}
          />

          <InputCreateEvents
            label={"Descripción"}
            inputName={"description"}
            inputValue={inputDescription}
            onInputChange={onInputChange}
            type="Textarea"
            placeholder="Descripción del evento"
            iserror={descriptionValid}
          />

          <InputCreateEvents
            label={"Fecha de inicio"}
            inputName={"date"}
            inputValue={inputDate}
            onInputChange={onInputChange}
            type="date"
            iserror={dateValid}
          />

          <InputCreateEvents
            label={"Horario"}
            inputName={"hour"}
            inputValue={inputHour}
            onInputChange={onInputChange}
            type="time"
            iserror={hourValid}
          />

          <InputCreateEvents
            label={"Capacidad"}
            inputName={"capacity"}
            inputValue={inputCapacity}
            onInputChange={onInputChange}
            type="number"
            iserror={capacityValid}
          />

          <InputCreateEvents
            label={"Categorias"}
            inputName={"category"}
            inputValue={inputCategory}
            onInputChange={onInputChange}
            type="Select"
            iserror={categoryValid}
          />

          <InputCreateEvents
            label={"Cargar imagen del evento"}
            inputName={"img"}
            inputValue={inputImg}
            onInputChange={onInputChange}
            type="file"
            placeholder="Nombre del evento"
            iserror={imgValid}
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
                style={{ cursor: "pointer" }}
              />
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

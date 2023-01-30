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
import { InputsLayouts } from "./InputsLayouts.jsx";

const initialForm = {
  name: "",
  description: "",
  date: "",
  hour: "",
  capacity: "",
  img: "",
  category: "",
  place: "",
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
  place: [(value) => value.length > 2, "Agregue la dirección del lugar"],
  category: [(value) => value !== "", "Elige una categoria para el evento"],
};

export const FormCreateEvents = () => {
  const toast = useToast();
  const router = useRouter();

  const [formSumitted, setFormSumitted] = useState(false);

  const {
    inputImg,
    inputPlace,
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
    placeValid,
    descriptionValid,
    dateValid,
    hourValid,
    capacityValid,
    imgValid,
    categoryValid,
  } = useForm(initialForm, formValidation);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, hour, img, name, description, category, capacity, place } =
      formState;

    const date_time = Date.parse(`${date} ${hour}:00 GMT-3`);

    const newFormState = {
      img,
      name,
      place,
      description,
      category,
      capacity,
      date_time,
    };

    // console.log(formState);
    // console.log(date,hour);
    // console.log(date_time);
    // console.log(moment(date_time).locale("es").format('LLLL'));

    setFormSumitted(true);

    if (!isFormValid) return;

    // console.log(newFormState);

    toast({
      title: "Evento Creado",
      description: "El evento ya fue agregado a nuestra base de datos",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => {
      router.push("/admin");
    }, 2200);
  };

  return (
    <Box maxWidth={"800px"} mx="auto" px="5" mb={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="8" flexDirection="column">
          <Heading textAlign="center" mt={{ base: 10, lg: 20 }} mb={{ lg: 10 }}>
            Crea un nuevo evento
          </Heading>

          <InputsLayouts
            label={"Nombre del evento:"}
            inputName={"name"}
            inputValue={inputName}
            onInputChange={onInputChange}
            placeholder={"Nombre del evento"}
            iserror={!!nameValid && formSumitted}
            errorText={nameValid}
          />

          <InputsLayouts
            label={"Descripción"}
            inputName={"description"}
            inputValue={inputDescription}
            onInputChange={onInputChange}
            type="Textarea"
            placeholder="Descripción del evento"
            iserror={!!descriptionValid && formSumitted}
            errorText={descriptionValid}
          />

          <InputsLayouts
            label={"Fecha de inicio"}
            inputName={"date"}
            inputValue={inputDate}
            onInputChange={onInputChange}
            type="date"
            iserror={!!dateValid && formSumitted}
            errorText={dateValid}
          />

          <InputsLayouts
            label={"Horario"}
            inputName={"hour"}
            inputValue={inputHour}
            onInputChange={onInputChange}
            type="time"
            iserror={!!hourValid && formSumitted}
            errorText={hourValid}
          />

          <InputsLayouts
            label={"Capacidad"}
            inputName={"capacity"}
            inputValue={inputCapacity}
            onInputChange={onInputChange}
            placeholder={"0"}
            type="number"
            iserror={!!capacityValid && formSumitted}
            errorText={capacityValid}
          />

          <InputsLayouts
            label={"Categorias"}
            inputName={"category"}
            inputValue={inputCategory}
            onInputChange={onInputChange}
            type="Select"
            iserror={!!categoryValid && formSumitted}
            errorText={categoryValid}
          />

          <InputsLayouts
            label={"Lugar"}
            inputName={"place"}
            inputValue={inputPlace}
            onInputChange={onInputChange}
            iserror={!!placeValid && formSumitted}
            placeholder={"Ludar y dirección del evento"}
            errorText={placeValid}
          />

          <InputsLayouts
            label={"Cargar imagen del evento"}
            inputName={"img"}
            inputValue={inputImg}
            onInputChange={onInputChange}
            type="file"
            placeholder="Nombre del evento"
            iserror={!!imgValid && formSumitted}
            errorText={imgValid}
          />
          {formState.img !== "" && (
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Box mb={1} mr={2}>
                <Text color={"green"} fontSize={"xl"}>
                  <BsFillCheckCircleFill />
                </Text>
              </Box>

              <Text
                textAlign={"center"}
                maxWidth={{ base: "300px", lg: "800px" }}
              >
                {formState.img}{" "}
              </Text>
            </Flex>
          )}

          <Flex justifyContent="center">
            <Button backgroundColor="#4548EB" mt={{ lg: 5 }} p={0}>
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

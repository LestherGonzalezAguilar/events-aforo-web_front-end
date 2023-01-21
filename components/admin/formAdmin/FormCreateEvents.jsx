import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "../../../hooks/useForm";

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
  const toast = useToast();

  const {
    inputImg,
    inputName,
    inputHour,
    inputCapacity,
    inputDate,
    inputDescription,
    inputCategory,
    onInputChange,
    formState,
    onResetForm,
  } = useForm(initialForm);

  const handleSubmit = () => {
    console.log(formState);
    onResetForm();
  };

  return (
    <Box maxWidth={"800px"} mx="auto" px="5" mb={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="15" flexDirection="column">
          <Heading textAlign="center" mt={20} mb={10}>
            Crea un nuevo evento
          </Heading>

          <Box>
            <Text mb="10px">Nombre del evento: </Text>
            <Input
              name="name"
              value={inputName}
              onChange={onInputChange}
              placeholder="Nombre del evento"
              size="sm"
              required
            />
          </Box>

          <Box>
            <Text mb="8px">Descripción</Text>
            <Textarea
              name="description"
              value={inputDescription}
              onChange={onInputChange}
              placeholder="Descripción del evento"
              size="sm"
            />
          </Box>

          <Box>
            <Text mb="10px">Fecha de inicio</Text>
            <Input
              name="date"
              value={inputDate}
              onChange={onInputChange}
              type="date"
              placeholder="Nombre del evento"
              size="sm"
            />
          </Box>

          <Box>
            <Text mb="10px">Hora</Text>
            <Input
              name="hour"
              value={inputHour}
              onChange={onInputChange}
              type="time"
              placeholder="Nombre del evento"
              size="sm"
            />
          </Box>

          <Box>
            <Text mb="10px">Capacidad </Text>
            <Input
              name="capacity"
              value={inputCapacity}
              defaultValue={0}
              onChange={onInputChange}
              type="number"
            />
          </Box>

          <Box>
            <Text mb="10px">Categorias</Text>
            <Select
              name="category"
              value={inputCategory}
              onChange={onInputChange}
            >
              <option value="Concierto musical">Concierto musical</option>
              <option value="Conferencia">Conferencia</option>
              <option value="Moda y belleza">Moda y belleza</option>
              <option value="Tecnologías">Tecnologías</option>
            </Select>
          </Box>

          <Box>
            <Text mb="10px">Cargar imagen del evento</Text>
            <Input
              name="img"
              value={inputImg}
              onChange={onInputChange}
              placeholder="Nombre del evento"
              size="sm"
              type="file"
            />
          </Box>

          <Flex justifyContent="center">
            <Box mt={10}>
              <Button
                width={{ base: "200px", lg: "400px" }}
                colorScheme="blue"
                onClick={() => {
                  handleSubmit();
                  toast({
                    title: "Evento Creado",
                    description:
                      "El evento ya fue agregado a nuestra base de datos",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Publicar
              </Button>
            </Box>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

export const InputCreateEvents = ({
  label,
  inputName,
  inputValue,
  onInputChange,
  placeholder = "",
  type = "text",
  defaultValue = "",
  iserror,
}) => {
  return (
    // <FormControl  isInvalid={iserror}>
    <FormControl isRequired isInvalid={iserror}>
      <FormLabel mb="10px">{label} </FormLabel>

      {type === "Textarea" ? (
        <Textarea
          name={inputName}
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
          size="sm"
        />
      ) : type === "Select" ? (
        <Select
          name="category"
          value={inputValue}
          onChange={onInputChange}
          defaultValue={null}
        >
          <option value="">Elige una categoria</option>
          <option value="Concierto musical">Concierto musical</option>
          <option value="Conferencia">Conferencia</option>
          <option value="Moda y belleza">Moda y belleza</option>
          <option value="Tecnologías">Tecnologías</option>
        </Select>
      ) : type === "file" ? (
        <Box
          p={"3"}
          backgroundColor={"gray.300"}
          _hover={{ backgroundColor: "gray.400", opacity: 0.95 }}
          transition="all 0.25s ease-out"
        >
          <Box
            py={"24"}
            height="100%"
            width="100%"
            borderWidth={3}
            borderColor={"gray.100"}
            borderStyle={"dashed"}
          >
            <Flex justifyContent="center">
              <Button backgroundColor="red.400" size="lg" color={"white"}>
                Subir imagen
                <Box ml={2} mb={1}>
                  <FaUpload />
                </Box>
              </Button>
              <Input
                name={inputName}
                value={inputValue}
                onChange={onInputChange}
                placeholder={placeholder}
                size="sm"
                type="file"
                accept="image/png,image/jpeg"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="false"
                style={{ cursor: "pointer" }}
              />
            </Flex>
          </Box>
        </Box>
      ) : (
        <Input
          name={inputName}
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
          size="sm"
          type={type}
          defaultValue={defaultValue}
        />
      )}

      {!iserror ? (
        <FormHelperText></FormHelperText>
      ) : (
        <FormErrorMessage>El {label} es requerido</FormErrorMessage>
      )}
    </FormControl>
  );
};
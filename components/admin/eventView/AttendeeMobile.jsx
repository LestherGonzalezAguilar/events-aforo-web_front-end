import React from "react";
import { GridItem, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, EmailIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";

export const AttendeeMobile = () => {
  return (
    <ListItem
      borderBottomColor="gray.100"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      py={2}
    >
      <GridItem p={2}>
        <ListIcon as={FaUserAlt} color="green.500" /> Lesther gonzalez
      </GridItem>
      <GridItem p={2}>
        <ListIcon as={CheckCircleIcon} color="green.500" /> ASDBASD12ASDAS
      </GridItem>
      <GridItem p={2}>
        <ListIcon as={EmailIcon} color="green.500" /> asdasd@gmail.com
      </GridItem>
    </ListItem>
  );
};

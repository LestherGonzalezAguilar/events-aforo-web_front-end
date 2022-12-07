import { Image } from "@chakra-ui/react";
import { AttendeesList } from "../../../components/homePage-admin/eventView/AttendeesList";
import { HeaderEvent } from "../../../components/homePage-admin/eventView/HeaderEvent";

const index = () => {
  return (
    <>
      <Image
        src="https://definicion.de/wp-content/uploads/2009/09/concierto.jpg"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        width="100"
      />
      <HeaderEvent />
      <AttendeesList />
    </>
  );
};

export default index;

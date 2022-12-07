import { Grid, GridItem } from '@chakra-ui/react'

import { FilterNav } from "./filterNav";
import { StatusEvents } from "./StatusEvents";

export const NavbarEvent = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
      <FilterNav />
      <StatusEvents />
    </Grid>
  );
};

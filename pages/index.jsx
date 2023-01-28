import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Banner, FilterEvents } from "../components/client";
import { EventCard } from "../components/client/EventCard";
import { PageLayout } from "../components/client/layouts/PageLayout";
import { eventsData as events } from "../data/eventsClient";

/**
 * the home page
 *
 * @type {Function}
 * @returns {React.ReactElement} Props Content Home Page
 */
export default function HomePage() {

  const [eventsAforify, setEventsAforify] = useState(events)

  const onSubmitSearch = (Filtereddata) => {
    setEventsAforify(Filtereddata)
    // console.log(Filtereddata)
  }

  return (
    <PageLayout>
      <Box maxWidth='1680px' margin='auto' width={{ base: '90%', md: '80%', lg: '70%' }} justifyContent='center' alignItems='center' gap={4}>
        <Banner />
        <FilterEvents onSubmitSearch={onSubmitSearch} events={events} />

        <Box pb={4}>
          <Text id="events" as='h1' fontWeight='bold' fontSize={{ base: 18, md: 26 }} textDecoration='underline'>Eventos</Text>
          <Box display='flex' gap={4} flexWrap='wrap' justifyContent='flex-start'>
            {eventsAforify.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {eventsAforify.length === 0 && <span>No hay eventos que mostrar</span>}
          </Box>
        </Box>


      </Box>

    </PageLayout >
  )
}

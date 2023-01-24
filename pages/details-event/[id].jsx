import { Box, Button, Flex, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { BreadCrumb } from "../../components/client/BreadCrumb";
import { getDateES } from "../../components/client/helpers/getDateES";
import { PageLayout } from "../../components/client/layouts/PageLayout";
import { eventsData } from "../../data/eventsClient";


const dataRoot = { main: 'Detalle del evento', root: [{ url: '/', title: 'Inicio' }] } //*Example
/**
 * the details-event
 *
 * @type {Function}
 * @returns {React.ReactElement} Props Content Home Page
 */
export default function DetailsEvent({ eventById: event }) {

    const dateES = getDateES(event.date)

    return (
        <PageLayout>
            <Box maxWidth='1680px' margin='auto' mb={5} width={{ base: '100%', md: '80%', lg: '70%' }} justifyContent='center' alignItems='center' gap={4}>
                <br />
                <BreadCrumb dataRoot={dataRoot} />

                <Image my={4} objectPosition='center center' width='100%' height={{ base: '280px', md: '320px', lg: '380px', xl:'560px' }} objectFit='cover'
                    src={event.img} alt={event.name} />

                <Flex flexDirection={{ base: 'column', md: 'row', lg: 'row' }} rowGap={4} width='95%' margin='auto' alignItems={{ base: 'flex-start', md: 'center', lg: 'center' }} justifyContent={{ base: 'flex-start', md: 'space-between', lg: 'space-between' }}>
                    <Box display='grid' rowGap={2} color='gray.800' mb={4}>
                        <Text as='h1' fontSize={36} fontWeight='bold'>{event.name}</Text>
                        <Text as='span' fontWeight='semibold' color='#4548EB'>{dateES}</Text>
                        {/* Hora de evento */}
                        <Flex gap={1}>
                            <Text fontWeight='semibold'>Hora:</Text>
                            <Text fontWeight='bold' color='#F26D73'>{event.hour}</Text>
                        </Flex>
                        {/* Capacidad del evento */}
                        <Flex gap={1}>
                            <Text fontWeight='semibold'>Capacidad:</Text>
                            <Text>{event.capacity}</Text>
                        </Flex>
                        {/* Lugar del evento */}
                        <Flex gap={1}>
                            <Text fontWeight='semibold'>Lugar:</Text>
                            <Text>Lugar indeterminado</Text>
                        </Flex>
                    </Box>
                    <Box display='flex' flexDirection='column' gap={4} alignItems={{ base: 'flex-start', md: 'flex-end', lg: 'flex-end' }}>
                        {/* Tag categoria del evento */}
                        <Flex gap={2} justifyContent='flex-end'>
                            <Text fontWeight='semibold'>Categoria:</Text>
                            {/* <Tag color='white' fontWeight='semibold' backgroundColor={category.color}>{category.name}</Tag> */}
                            <Tag color='white' fontWeight='semibold' backgroundColor={event.category.color}>{event.category.name}</Tag>
                        </Flex>
                        <Button width='max-content' mb={2} fontSize={24} px={8} py={6} as='a' href={`/subscribe-event/${event.id}`} color='white' _hover={{ backgroundColor: 'orange.500' }} backgroundColor='orange.400'>Inscribirse</Button>
                    </Box>
                </Flex>
                <Box width='95%' margin='auto' mb={10}>
                    <Text as='h2' fontWeight='semibold'>Descripción</Text>
                    <p>{event.description}</p>
                </Box>
            </Box>

        </PageLayout >
    )
}



// eslint-disable-next-line jsdoc/require-jsdoc
export async function getServerSideProps(context) {
    // console.log(context.query.id);
    // console.log({eventsData});

    // const result = await fetch(`api/events/${context.id}`)
    let eventById = eventsData.find(event => event.id === context.query.id)
    const hourEvent = `${new Date(eventById?.hour).getHours()}:${new Date(eventById?.hour).getMinutes()}`
    // console.log({ eventById })

    eventById = { ...eventById, hour: hourEvent }
    return {
        props: {
            eventById: eventById,
        }, // will be passed to the page component as props
    }
}
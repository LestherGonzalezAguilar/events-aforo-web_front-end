import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react"
import Link from "next/link"
import { AiFillEye } from "react-icons/ai"
import { StateEvent } from "./StateEvent"
import { getDateES } from "./helpers/getDateES"
import Image from "next/image"

export const EventCard = ({ event }) => {

    const hour = new Date(event.hour).getHours()

    let minutes = new Date(event.hour).getMinutes()

    minutes = minutes.toString().length > 0 ? minutes : `0${minutes}`

    const dateES = getDateES(event.date)
    return (
        <Card href={`/details-event/${event.id}`} maxW='sm' position='relative' mt={5} as={Link} style={{ textDecoration: 'none' }} _hover={{ transform: 'scale(1.02)' }} transition='all 0.25s ease-out'>
            <Box size='sx' display='flex' justifyContent='flex-end' position='absolute' ml={5} bottom='calc(100% - 2%)'>
                <Tag color='white' fontWeight='semibold' backgroundColor={event.category.color}>{event.category.name}</Tag>
            </Box>
            <CardBody>

                <Image
                    src={event.img}
                    alt={event.name}
                    width='480'
                    height='270'
                    style={{ borderRadius: '0.5rem', maxHeight: '270px' }}
                />
                {/* <Image
                    src={event.img}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                /> */}
                <Stack mt='6' spacing='1'>
                    <Heading size='md' my={2} color='gray.800'>{event.name}</Heading>
                    <Text fontWeight='regular' size='sm'>
                        {event.description}
                    </Text>
                    <Text color='#4548EB' size='sx' fontWeight='semibold'>
                        {dateES}
                    </Text>
                    <Box size='sx' fontWeight='bold' display='flex' gap={1}>
                        <Text color='gray.800'>Hora:</Text>
                        <Text color='#F26D73'>{`${hour}:${minutes}`}</Text>
                    </Box>
                    <Box size='sx' display='flex' gap={1}>
                        <Text fontWeight='medium' color='gray.600'>Capacidad:</Text>
                        <Text fontWeight='medium' color='gray.800'>{event.capacity} personas</Text>
                    </Box>
                    <Box size='sx' fontWeight='medium' display='flex' justifyContent='flex-end'>
                        <StateEvent {...event} />
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter display='flex' fontWeight='medium' justifyContent='space-between' alignItems='center' pt={0}>
                <Flex fontWeight='semibold' flexDirection='column'>
                    <Text color='gray.600'>Organizado por</Text>
                    <Text color='#4548EB' textDecoration='underline'>{event.user.name}</Text>
                </Flex>
                <Button variant='outline' fontWeight='semibold' colorScheme='blue' size='sm' rightIcon={<AiFillEye />}>
                    Ver detalles
                </Button>
            </CardFooter>
        </Card>
    )
}

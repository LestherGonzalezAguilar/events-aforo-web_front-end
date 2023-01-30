import { Box, Button, Flex, Grid, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { InputsLayouts } from "../../../components/admin/formAdmin/InputsLayouts.jsx";
import { BreadCrumb } from "../../../components/client/BreadCrumb";
import { PageLayout } from "../../../components/client/layouts/PageLayout";
import { eventsData } from "../../../data/eventsClient";
import { useForm } from "../../../hooks";

const formValidations = {
    name: [(value) => (value.length > 2), 'El nombre debe de ser mayor a 2 caracteres'],
    lastName: [(value) => (value.length > 2), 'La apellido debe de ser mayor a 2 caracteres'],
    email: [(value) => (value.includes('@')), 'El correo debe de tener un @'],
}
const eventSubscribeFields = {
    name: '',
    lastName: '',
    email: '',
}

/**
 * the details-event
 *
 * @type {Function}
 * @returns {React.ReactElement} Props Content Home Page
 */
export default function DetailsEvent({ eventById: event }) {
    const router = useRouter()
    
    useEffect(() => {
        if (event.state !== "Disponible") {
            router.push(`/details-event/${event.id}`);
        }
    }, [event])
    
    const toast = useToast()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const { name, lastName, email, nameValid, lastNameValid, emailValid, formState, onInputChange, isFormValid } = useForm(eventSubscribeFields, formValidations)

    const dataRoot = { main: 'Suscripción al evento', root: [{ url: '/', title: 'Inicio' }, { url: `/details-event/${event.id}`, title: 'Detalle del evento' }] } //*Example

    const onSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        if (!isFormValid) return

        toast({
            title: `Suscripción existosa`,
            description: `Gracias por suscribirse al evento ${event.name}`,
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (
        <PageLayout>
            <Box maxWidth='1680px' margin='auto' mb={5} width={{ base: '100%', md: '80%', lg: '70%' }} justifyContent='center' alignItems='center' gap={4}>
                <br />
                <BreadCrumb dataRoot={dataRoot} />

                {/* FORM */}
                <Box maxWidth='1680px' margin='auto'>
                    <Flex justifyContent='center' mt={10}>
                        <Box>
                            <Text as='h1' color='gray.800' fontSize={36} fontWeight='bold'>Suscribirse al evento</Text>
                            <Text as='h2' color='gray.600' fontSize={24} fontWeight='medium'>{event.name}</Text>
                        </Box>
                    </Flex>
                    <form onSubmit={onSubmit}>

                        <Flex flexDirection='column' mt={10} alignItems='center'>
                            <Grid rowGap={4} width='calc(1680px / 2)'>
                                {/* Nombre del usuario anónimo */}
                                <InputsLayouts
                                    label={"Nombre:"}
                                    inputName={"name"}
                                    inputValue={name}
                                    onInputChange={onInputChange}
                                    placeholder={"Nombre..."}
                                    iserror={!!nameValid && formSubmitted}
                                    errorText={nameValid}
                                />
                                {/* Apellido del usuario anónimo */}
                                <InputsLayouts
                                    label={"Apellido:"}
                                    inputName={"lastName"}
                                    inputValue={lastName}
                                    onInputChange={onInputChange}
                                    placeholder={"Apellido..."}
                                    iserror={!!lastNameValid && formSubmitted}
                                    errorText={lastNameValid}
                                />
                                {/* Nombre del usuario anónimo */}
                                <InputsLayouts
                                    label={"Correo:"}
                                    inputName={"email"}
                                    inputValue={email}
                                    onInputChange={onInputChange}
                                    placeholder={"Correo..."}
                                    iserror={!!emailValid && formSubmitted}
                                    errorText={emailValid}
                                />
                            </Grid>
                            <Flex mt={10} justifyContent='center'>
                                <Button type="submit" backgroundColor='#4548EB' _hover={{ backgroundColor: '#2C2E9D' }} color='white' fontSize={18} px={20} py={6}>Enviar</Button>
                            </Flex>
                        </Flex>
                    </form>
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
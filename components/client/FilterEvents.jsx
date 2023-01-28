import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Grid, Input, InputGroup, InputLeftElement, Select, Text } from "@chakra-ui/react"
import { useForm } from "../../hooks"


const initialFormSearch = {
    inputSearch: '',
    inputDate: '',
    selectOrganizator: '',
    selectEventState: '',
    selectEventCategory: ''
}

export const FilterEvents = ({ onSubmitSearch, events = [] }) => {

    const { inputSearch, inputDate, selectEventState, selectEventCategory, onInputChange } = useForm(initialFormSearch)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (inputSearch === '' && inputDate === '' && selectEventState === '' && selectEventCategory === '')
            return onSubmitSearch(events)
        const inputDateFormatted = () => {
            let fecha = new Date(inputDate)
            fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset())
            return new Date(fecha).toDateString()
        }

        // console.log({ selectOrganizator, selectEventState, selectEventCategory, eventDate: events[0].date, inputDateFormatted: inputDateFormatted(), inputDate });
        let eventFiltered = events.filter(event => { return event.name.match(inputSearch) })
        if (inputDate !== '')
            eventFiltered = eventFiltered.filter(event => { return event.date === inputDateFormatted() })
        // if (selectOrganizator !== '')
        //     eventFiltered = eventFiltered.filter(event => { return event.user.name === selectOrganizator })
        if (selectEventCategory !== '')
            eventFiltered = eventFiltered.filter(event => { return event.category.name === selectEventCategory })
        if (selectEventState !== '')
            eventFiltered = eventFiltered.filter(event => { return event.state === selectEventState })

        // console.log(eventFiltered)
        onSubmitSearch(eventFiltered)
    }


    return (
        <form onSubmit={onSubmit} >
            <Box maxWidth='1680px' margin='auto'>
                <Flex flexDirection={{ base: 'column', md: 'row', lg: 'row' }} maxWidth='800px' margin='auto' justifyContent='center' alignItems='center' gap={4}>
                    <InputGroup>
                        <InputLeftElement height='100%'
                            pointerEvents='none'
                            // eslint-disable-next-line react/no-children-prop
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input name='inputSearch' value={inputSearch} onChange={onInputChange} type='search' style={{ paddingLeft: '2em' }} placeholder='Encuentre los eventos de su interés...' size={{ base: 'md', lg: 'lg' }} />
                    </InputGroup>
                    <Button type='submit' size={{ base: 'md', sm: 'sm', md: 'md', lg: 'lg' }} border='0.05em solid #4548EB' backgroundColor='white' color='gray.800' _hover={{ backgroundColor: '#4548EB', color: 'white' }} variant='solid'>
                        Buscar
                    </Button>
                </Flex>
                <hr style={{ margin: '1em auto', width: { base: '80%', lg: '50%' } }} />

                <Grid columnGap={4} rowGap={4} gridTemplateColumns={{ base: 'repeat(2, auto)', sm: 'repeat(2,auto)', md: 'repeat(2,auto)', lg: 'repeat(4, auto)' }} justifyContent={{ base: 'center' }}>
                    {/* Fecha del evento */}
                    <Box>
                        <Input
                            placeholder="Select Date and Time"
                            size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg' }}
                            type="date"
                            width='max-content'
                            name='inputDate' value={inputDate} onChange={onInputChange}
                        />
                        <Text mt='8px' color='gray.500'>Fecha de evento</Text>
                    </Box>

                    {/* Organizador */}
                    {/* <Box>
                        <Select placeholder='Seleccione...' size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg' }}
                            value={selectOrganizator} name="selectOrganizator" onChange={onInputChange}
                        >
                            <option value='user organizator'>Organizador 1</option>
                            <option value='option2'>Organizador 2</option>
                            <option value='option3'>Organizador 3</option>
                        </Select>
                        <Text mt='8px' color='gray.500'>Organizador</Text>
                    </Box> */}
                    {/* Estado del evento */}
                    <Box>
                        <Select placeholder='Seleccione...' size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg' }}
                            value={selectEventState} name="selectEventState" onChange={onInputChange}
                        >
                            <option value='Disponible'>Disponible</option>
                            <option value='Sin cupos'>Sin cupos</option>
                            <option value='Finalizados'>Finalizados</option>
                        </Select>
                        <Text mt='8px' color='gray.500'>Estado de evento</Text>
                    </Box>
                    {/* Categoría */}
                    <Box>
                        <Select placeholder='Seleccione...' size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'lg' }}
                            value={selectEventCategory} name="selectEventCategory" onChange={onInputChange}
                        >
                            {/* //TODO Realizar las opciones con los id correspondientes */}
                            <option value='Concierto'>Concierto</option>
                            <option value='Conferencia'>Conferencia</option>
                            <option value='Moda y Belleza'>Moda y belleza</option>
                            <option value='Tecnologías'>Tecnologías</option>
                        </Select>
                        <Text mt='8px' color='gray.500'>Categoría</Text>
                    </Box>
                </Grid>
                <hr style={{ margin: '1em auto', width: { base: '80%', lg: '50%' } }} />
            </Box>
        </form>

    )
}

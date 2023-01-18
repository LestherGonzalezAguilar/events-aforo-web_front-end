import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Grid, Input, InputGroup, InputLeftElement, Select, Text } from "@chakra-ui/react"

export const FilterEvents = () => {
    return (
        <Box maxWidth='1680px' margin='auto'>
            <Flex flexDirection={{ base: 'column-reverse', md: 'row', lg: 'row' }} margin='auto' width={{ base: '80%', md: '70%', lg: '50%' }} justifyContent='center' alignItems='center' gap={4}>
                <InputGroup>
                    <InputLeftElement height='100%'
                        pointerEvents='none'
                        // eslint-disable-next-line react/no-children-prop
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='search' placeholder='Encuentre los eventos de su interés...' size='lg' />
                </InputGroup>
                <Button size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} border='0.05em solid #4548EB' backgroundColor='white' color='gray.800' _hover={{ backgroundColor: '#4548EB', color: 'white' }} variant='solid'>
                    Buscar
                </Button>
            </Flex>
            <hr style={{ margin: '1em auto', width: '50%' }} />

            <Grid columnGap={4} rowGap={4} gridTemplateColumns={{ base: 'repeat(2, auto)', sm: 'repeat(2,auto)', md: 'repeat(2,auto)', lg: 'repeat(4, auto)' }} justifyContent={{ base: 'center' }}>
                {/* Fecha del evento */}
                <Box>
                    <Input
                        placeholder="Select Date and Time"
                        size={{ base: 'md', md: 'md', lg: 'lg' }}
                        type="date"
                        width='max-content'
                    />
                    <Text mt='8px' color='gray.500'>Fecha de evento</Text>
                </Box>

                {/* Organizador */}
                <Box>
                    <Select placeholder='Seleccione...' size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}>
                        <option value='option1'>Organizador 1</option>
                        <option value='option2'>Organizador 2</option>
                        <option value='option3'>Organizador 3</option>
                    </Select>
                    <Text mt='8px' color='gray.500'>Organizador</Text>
                </Box>
                {/* Estado del evento */}
                <Box>
                    <Select placeholder='Seleccione...' size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}>
                        <option value='option1'>Disponible</option>
                        <option value='option2'>Sin cupos</option>
                        <option value='option3'>Finalizados</option>
                    </Select>
                    <Text mt='8px' color='gray.500'>Estado de evento</Text>
                </Box>
                {/* Categoría */}
                <Box>
                    <Select placeholder='Seleccione...' size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}>
                        <option value='option1'>Concierto musical</option>
                        <option value='option2'>Conferencia</option>
                        <option value='option3'>Moda y belleza</option>
                        <option value='option3'>Tecnologías</option>
                    </Select>
                    <Text mt='8px' color='gray.500'>Categoría</Text>
                </Box>
            </Grid>
            <hr style={{ margin: '1em auto', width: '50%' }} />
        </Box>
    )
}

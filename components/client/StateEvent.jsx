import { Tag } from "@chakra-ui/react"

export const StateEvent = ({ state, total_attendees, capacity }) => {

    const availablesText = (state === 'Disponible' && (capacity - total_attendees) > 1) ? 'Cupos libre' : 'Cupo libre'
    const availables = capacity - total_attendees
    const stateEvent = () => {
        switch (state) {
            case 'Finalizados':
                return { text: 'Finalizado', color: '#C53030', bg: 'gray.200' }
            case 'Sin cupos':
                return { text: 'Sin cupos', color: 'white', bg: 'gray.600' }
            default:
                return { text: `${availables} ${availablesText}`, color: 'white', bg: 'green.500' }
        }
    }

    return (
        <Tag fontWeight='semibold' color={stateEvent().color} backgroundColor={stateEvent().bg}>{stateEvent().text}</Tag>
    )
}

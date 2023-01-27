import { getStateEvent } from "../components/client/helpers/getStateEvent"

export const eventsData = [
    {
        id: '12312rasibfa',
        name: 'title event',
        description: 'description event',
        date: new Date().toDateString(),
        hour: 1674147526292,
        capacity: 500,
        img: 'https://images.unsplash.com/photo-1579932493892-5a1a5ad55d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        total_attendees: 500,
        category: {
            id: '12312rasf',
            name: 'Concierto',
            color: 'blue.400'
        },
        user: {
            uid: '1231qfasfa',
            name: 'user organizator'
        }
    },
    {
        id: '12312rasibfaasda',
        name: 'title event #2',
        description: 'description event #2',
        date: 'Fri Jan 27 2023',
        hour: new Date().getTime(),
        capacity: 250,
        img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        total_attendees: 15,
        category: {
            id: '12312rasfasdqwedqw',
            name: 'Conferencia',
            color: 'gray.800'

        },
        user: {
            uid: '1231qfasfa',
            name: 'user organizator'
        }
    },
    {
        id: 'asdaaasd21123',
        name: 'title event #3',
        description: 'description event #3',
        date: new Date().toDateString(),
        hour: new Date().getTime(),
        capacity: 120,
        img: 'https://images.unsplash.com/photo-1581190513843-54f562d50d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        total_attendees: 120,
        category: {
            id: 'aaaweqe121rqef',
            name: 'Moda y Belleza',
            color: '#F26D73'

        },
        user: {
            uid: '1231qfasfa',
            name: 'user organizator'
        }
    },
    {
        id: 'asdaaasd21124653',
        name: 'title event #4',
        description: 'description event #4',
        date: new Date().toDateString(),
        hour: new Date().getTime(),
        capacity: 150,
        total_attendees: 15,
        img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
        category: {
            id: 'aaaweqe121rqef',
            name: 'Tecnologías',
            color: '#4548EB'
        },
        user: {
            uid: '1231qfasfa',
            name: 'user organizator'
        }
    }
].map(event => {

    let state = getStateEvent(event)

    return { ...event, state }
})
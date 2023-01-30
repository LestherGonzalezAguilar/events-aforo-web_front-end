export const getStateEvent = (event) => {
    const todayDate = new Date()
    const randomHour = 10
    const randomMinutes = 58

    const { date: dateEvent, hour: hourEvent, total_attendees, capacity } = event
    const eventHours = new Date(hourEvent).getHours()
    const eventMinutes = new Date(hourEvent).getMinutes()

    let newDateEvent = new Date(dateEvent)
    let state = 'Disponible'

    const fullDate = new Date(newDateEvent.setHours(eventHours, eventMinutes))
    
    if (fullDate >= todayDate){
        return 'Finalizados'
    }

    if (total_attendees === capacity)
        return 'Sin cupos'

    return state

}
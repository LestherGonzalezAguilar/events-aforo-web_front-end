export const useStatusEvents = ({ eventsData }) => {
  const [eventsActive, setEventsActive] = useState();
  const [eventsFinished, setEventsFinished] = useState();

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let date = today.getFullYear() + "-" + month + "-" + day;
  
  const filterEventActive = async () => {
    let events = await data?.filter((event) => event.date_time > date);
    setEventsActive(events);
  };
  
  return 
};

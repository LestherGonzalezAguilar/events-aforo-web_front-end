import { useEffect, useState } from "react";

export const useStatusEvents = (eventsData) => {
  useEffect(() => {
    divideEvent();
  }, [eventsData]);

  const [eventsActive, setEventsActive] = useState();
  const [eventsFinished, setEventsFinished] = useState();

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let date = today.getFullYear() + "-" + month + "-" + day;

  const divideEvent = () => {
    let eventsActives = eventsData?.filter((event) => event.date_time >= date);
    let eventsFinishes = eventsData?.filter((event) => event.date_time < date);
    setEventsActive(eventsActives);
    setEventsFinished(eventsFinishes);
  };

  return [eventsActive, eventsFinished];
};

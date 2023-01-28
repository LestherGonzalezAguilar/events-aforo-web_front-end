import { useEffect, useState } from "react";
// import moment from "moment/moment";

export const useStatusEvents = (eventsData) => {
  useEffect(() => {
    divideEvent();
  }, [eventsData]);

  const [eventsActive, setEventsActive] = useState();
  const [eventsFinished, setEventsFinished] = useState();

  let today = new Date();
  // let day = today.getDate();
  // let month = today.getMonth() + 1;
  // let date = today.getFullYear() + "-" + month + "-" + day;
  let date_parse = Date.parse(today);

  const divideEvent = () => {
    let eventsActives = eventsData?.filter(
      (event) => event.date_time >= date_parse
    );
    let eventsFinishes = eventsData?.filter(
      (event) => event.date_time < date_parse
    );
    setEventsActive(eventsActives);
    setEventsFinished(eventsFinishes);
  };

  return [eventsActive, eventsFinished];
};

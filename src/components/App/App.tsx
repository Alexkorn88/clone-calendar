import React, { useEffect, useState } from "react";
import moment from "moment";
import { CalendarGrid, Header } from "../index";
import css from "./App.module.css";
import { Events } from "../../types/eventType";

const url = "http://localhost:5000";

export const App: React.FC = () => {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState<moment.Moment>(moment());
  const [events, setEvents] = useState<Events>([]);

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setEvents(res);
      })
      .catch((e) => console.log(e));
  }, [today]);

  const startDay = today.clone().startOf("month").startOf("week");

  const startDayQuery = startDay.clone().format("X");
  const endDayQuery = startDay.clone().add(42, "days").format("X");

  const prevHandler = (): void => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = (): void => {
    setToday(moment());
  };
  const nextHandler = (): void => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <div className={css.container}>
      <Header
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} today={today} events={events} />
    </div>
  );
};

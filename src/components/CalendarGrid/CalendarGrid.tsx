import moment from "moment";
import React from "react";
import { Events } from "../../types/eventType";
import css from "./CalendarGrid.module.css";

interface CalendarProps {
  startDay: moment.Moment;
  today: moment.Moment;
  events: Events;
  children?: JSX.Element | JSX.Element[];
}

export const CalendarGrid = ({ startDay, today, events }: CalendarProps) => {
  // const startDay = moment().startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");

  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day: moment.Moment) => moment().isSame(day, "day");
  const isSelectedWeek = (day: moment.Moment) => today.isSame(day, "month");

  return (
    <>
      <div className={css.dayOfWeek}>
        {[...Array(7)].map((_, index) => (
          <div key={index} className={css.dayOfWeekSelf}>
            {moment()
              .day(index + 1)
              .format("dddd")}
          </div>
        ))}
      </div>
      <div className={css.wrapper}>
        {daysArray.map((dayItem): React.ReactElement => {
          return (
            <div
              className={
                dayItem.day() === 6 || dayItem.day() === 0
                  ? `${css.weekendWrapper}`
                  : `${css.cell}`
              }
              key={dayItem.unix()}
            >
              <div
                className={
                  isSelectedWeek(dayItem)
                    ? `${css.rowCell}`
                    : `${css.rowCellLite}`
                }
              >
                {isCurrentDay(dayItem) ? (
                  <div className={css.currentdayWrapper}>
                    {dayItem.format("D")}
                  </div>
                ) : (
                  <div className={css.dayWrapper}>{dayItem.format("D")}</div>
                )}
              </div>
              <ul className={css.eventWrapper}>
                {events
                  .filter(
                    (event) =>
                      event.date >= +dayItem.format("X") &&
                      event.date <= +dayItem.clone().endOf("day").format("X")
                  )
                  .map((event) => (
                    <li key={event.id} className={css.event}>
                      <button className={css.btnEvent}>{event.title}</button>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

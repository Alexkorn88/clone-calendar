import React from "react";
import { Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import moment from "moment";
import css from "./Header.module.css";

interface HeaderProps {
  today: moment.Moment;
  prevHandler: () => void;
  todayHandler: () => void;
  nextHandler: () => void;
}

export const Header = ({
  today,
  prevHandler,
  todayHandler,
  nextHandler,
}: HeaderProps) => {
  const handleChange = () => {
    console.log(123);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.textWrapper}>
        <span className={css.month}>{today.format("MMMM")}</span>
        <span className={css.year}>{today.format("YYYY")}</span>
      </div>
      <div>
        <Select
          className={css.select}
          defaultValue="month"
          style={{ width: 160 }}
          onChange={handleChange}
          size="large"
          options={[
            { value: "day", label: "День" },
            { value: "week", label: "Неделя" },
            { value: "month", label: "Месяц" },
            { value: "year", label: "Год" },
          ]}
        />
      </div>
      <div className={css.btnBlock}>
        <button className={css.btn} onClick={prevHandler}>
          <LeftOutlined />
        </button>
        <button className={css.btn} onClick={todayHandler}>
          Today
        </button>
        <button className={css.btn} onClick={nextHandler}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

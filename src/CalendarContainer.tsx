import React, { useCallback, useState } from "react";
import CalendarPresenter from "./CalendarPresenter";
import moment from "moment";

const CalendarContainer = () => {
  let calendar: any[] = [];
  const [current, setCurrent] = useState(moment());
  const [date, setDate] = useState<string>("YYYY-MM-DD");

  const startWeek = current.clone().startOf("month").week();
  const endWeek =
    current.clone().endOf("month").week() === 1
      ? 53
      : current.clone().endOf("month").week();

  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push(
      Array(7)
        .fill(0)
        .map((n, i) => {
          let currents = current
            .clone()
            .week(week)
            .startOf("week")
            .add(n + i, "day");

          return currents;
        })
    );
  }

  const onClickDate = useCallback(
    (args: string) => {
      setDate(args);
      console.log(args);
    },
    [setDate]
  );

  const handlePrevMonth = useCallback(() => {
    setCurrent(current.clone().subtract(1, "month"));
  }, [current]);

  const handleNextMonth = useCallback(() => {
    setCurrent(current.clone().add(1, "month"));
  }, [current]);

  return (
    <CalendarPresenter
      current={current}
      calendar={calendar}
      handlePrevMonth={handlePrevMonth}
      handleNextMonth={handleNextMonth}
      onClickDate={onClickDate}
    />
  );
};

export default CalendarContainer;

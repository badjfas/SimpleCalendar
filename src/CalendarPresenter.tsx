import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import { DateBtn, MuiBox, MuiPaper } from "./styles/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import moment, { Moment } from "moment";
interface IProps {
  current: Moment;
  calendar: any[];
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  onClickDate: (_: string, __: string, ___: string) => void;
  clicked: {
    row: string | null;
    col: string | null;
  };
  dayOfTheWeekKo: string[];
}
const CalendarPresenter = ({
  calendar,
  current,
  handleNextMonth,
  handlePrevMonth,
  onClickDate,
  clicked,
  dayOfTheWeekKo,
}: IProps) => {
  return (
    <MuiPaper elevation={3}>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        <IconButton onClick={handlePrevMonth}>
          <ArrowLeftIcon />
        </IconButton>
        <Typography
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          {current.format("YYYY년 MM월")}
        </Typography>
        <IconButton onClick={handleNextMonth}>
          <ArrowRightIcon />
        </IconButton>
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {dayOfTheWeekKo.map((e, i) => (
          <Typography
            key={i}
            style={{
              width: "calc(100% / 7)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontSize: 12,
            }}
          >
            {e}
          </Typography>
        ))}
      </MuiBox>
      <MuiBox>
        {calendar.map((e, row: any) => {
          return e.map((k: any, col: any) => {
            return (
              <DateBtn
                disabled={k.format("YYMMDD") < moment().format("YYMMDD")}
                key={col}
                onClick={() => {
                  onClickDate(k.format("YYYY년 MM월 DD일"), row, col);
                }}
                style={{
                  color: `${
                    +clicked.col === col &&
                    +clicked.row === row &&
                    clicked.col !== null
                      ? "#fff"
                      : ""
                  }`,
                  backgroundColor: `${
                    +clicked.col === col &&
                    +clicked.row === row &&
                    clicked.col !== null
                      ? "#8fa4d1"
                      : ""
                  }`,
                }}
              >
                <Typography style={{ fontSize: 14 }}>
                  {k.format("D")}
                </Typography>
              </DateBtn>
            );
          });
        })}
      </MuiBox>
      ;
    </MuiPaper>
  );
};

export default CalendarPresenter;

import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import { DateBtn, MuiBox, MuiPaper } from "./styles/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Moment } from "moment";
interface IProps {
  current: Moment;
  calendar: any[];
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  onClickDate: (_: string, __: string, ___: string) => void;
  clicked: {
    row: string;
    col: string;
  };
}
const CalendarPresenter = ({
  calendar,
  current,
  handleNextMonth,
  handlePrevMonth,
  onClickDate,
  clicked,
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
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            color: "#FF385C",
          }}
        >
          일
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          월
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          화
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          수
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          목
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          금
        </Typography>
        <Typography
          style={{
            width: "calc(100% / 7)",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            color: "#001AFF",
          }}
        >
          토
        </Typography>
      </MuiBox>
      <MuiBox>
        {calendar.map((e, row: any) => {
          return e.map((k: any, col: any) => {
            return (
              <DateBtn
                key={col}
                onClick={() => {
                  onClickDate(k.format("YYYY년 MM월 DD일"), row, col);
                }}
                style={{
                  color: `${
                    +clicked.col === col && +clicked.row === row ? "#fff" : ""
                  }`,
                  backgroundColor: `${
                    +clicked.col === col && +clicked.row === row
                      ? "#8fa4d1"
                      : ""
                  }`,
                }}
              >
                <Typography>{k.format("D")}</Typography>
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

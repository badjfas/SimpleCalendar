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
  onClickDate: (_: string) => void;
}
const CalendarPresenter = ({
  calendar,
  current,
  handleNextMonth,
  handlePrevMonth,
  onClickDate,
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
            color: "#001AFF",
          }}
        >
          토
        </Typography>
      </MuiBox>

      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[0].map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[1].map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[2].map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[3].map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[4].map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
      <MuiBox display="flex" width={"100%"} height={"50px"} justfiy="center">
        {calendar[5]?.map((e: any, i: number) => {
          return (
            <DateBtn
              onClick={() => {
                onClickDate(e.format("YYYY년 MM월 DD일"));
              }}
              key={i}
              style={{
                color: `${(i === 0 && "red") || (i === 6 && "blue")}`,
              }}
            >
              <Typography>{e.format("D")}</Typography>
            </DateBtn>
          );
        })}
      </MuiBox>
    </MuiPaper>
  );
};

export default CalendarPresenter;

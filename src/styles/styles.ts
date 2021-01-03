import { Box, IconButton, Paper } from "@material-ui/core";
import styled from "styled-components";

export const MuiPaper = styled(Paper)`
  position: absolute;
  width: 350px;
  left: 50px;
  top: 50px;
`;

interface IBox {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  display?: "flex" | "inline-block";
  justfiy?:
    | "center"
    | "flex-start"
    | "space-between"
    | "space-evenly"
    | "flex-end";
  alignItems?:
    | "center"
    | "flex-start"
    | "space-between"
    | "space-evenly"
    | "flex-end";
}

export const MuiBox = styled(Box)<IBox>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justfiy};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
`;

export const DateBtn = styled(IconButton)`
  width: calc(100% / 7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>start Game</StyledStartButton>
);
export default StartButton;

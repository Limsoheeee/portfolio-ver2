import React from "react";
import { css } from "@emotion/react";

const Intro = () => {
  return <div css={rootStyles}>Intro</div>;
};

export default Intro;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  /* background-color: #f4eee0; */
  background-image: url("../../assets/Image/background.png") center no-repeat;
`;

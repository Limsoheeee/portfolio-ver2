import React from "react";
import { css } from "@emotion/react";

const Error = () => {
  return <div css={wrapper}>Error</div>;
};

export default Error;
const wrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const PersonalProject = () => {
  return <div css={rootStyles}>PersonalProject</div>;
};

export default PersonalProject;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  background-color: #cece7d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden !important;
`;

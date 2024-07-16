/** @jsxImportSource @emotion/react */
import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { css } from "@emotion/react";
import Intro from "../components/main/Intro";
import PersonalProject from "../components/main/PersonalProject";

const Main = () => {
  const { width, ref } = useResizeDetector();
  return (
    <div ref={ref}>
      {width > 1439 ? (
        <>
          <Intro />
          <PersonalProject />
        </>
      ) : (
        <div css={wrap}>
          <p>화면너비 1440px이상으로 설정해주세요. </p>
        </div>
      )}
    </div>
  );
};

export default Main;

const wrap = css`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SUITE-Regular";
  font-size: 34px;
`;

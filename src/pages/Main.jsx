import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { css } from "@emotion/react";
import Intro from "../components/main/Intro";

const Main = () => {
  const { width, ref } = useResizeDetector();
  return (
    <div ref={ref}>
      {width > 1439 ? (
        <Intro />
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
  background-color: #d9d9d9;
`;
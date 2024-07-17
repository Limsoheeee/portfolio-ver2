import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResizeDetector } from "react-resize-detector";
import { css } from "@emotion/react";
import Intro from "../components/main/Intro";
import PersonalProject from "../components/main/PersonalProject";
import AboutMe from "../components/main/AboutMe";
import WebProject from "../components/main/WebProject";
import AppProject from "../components/main/AppProject";

const Main = () => {
  const { width, ref } = useResizeDetector();

  return (
    <div ref={ref}>
      {width > 1319 ? (
        <div css={wrap}>
          <Intro />
          <PersonalProject />
          <AboutMe />
          <WebProject />
          <AppProject />
        </div>
      ) : (
        <div css={wrap}>
          <p>화면너비 1320px이상으로 설정해주세요. </p>
        </div>
      )}
    </div>
  );
};

export default Main;

const wrap = css`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

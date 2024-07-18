import React from "react";
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
import ProjectDesc from "../components/main/ProjectDesc";
import Project from "@/components/main/Project";
import RestIntro from "@/components/main/RestIntro";
import Introduce from "@/components/main/Introduce";
import IntroduceComment from "@/components/main/IntroduceComment";
import Contact from "@/components/main/Contact";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const { width, ref } = useResizeDetector();

  return (
    <div ref={ref}>
      {width > 1319 ? (
        <div css={rootStyle}>
          <Intro />
          <PersonalProject />
          <AboutMe />
          <WebProject />
          <AppProject />
          <ProjectDesc />
          <Project />
          <RestIntro />
          <Introduce />
          <IntroduceComment />
          <Contact />
        </div>
      ) : (
        <div css={wrap}>
          <p className="widthStyle">현재 화면너비:{width}px</p>
          <p>화면너비 1320px이상으로 설정해주세요. </p>
        </div>
      )}
    </div>
  );
};

export default Main;

const rootStyle = css`
  width: 100%;
  min-height: 100vh;
`;

const wrap = css`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #fb8971;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "IM_Hyemin-Bold";
  font-size: 16px;
  .widthStyle {
    /* font-family: "HS-Regular"; */
    font-size: 36px;
    margin-bottom: 5rem;
    color: #f4eee0;
  }
`;

import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  return (
    <div css={rootStyles}>
      <div css={titleWrap}>About Me</div>
      <div css={bottomStyles}>RESUMES</div>
    </div>
  );
};

export default AboutMe;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  background-color: #dbdb77;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden !important;
`;
const titleWrap = css`
  font-family: "Cafe24Meongi-B-v1.0";
  font-size: 60px;
  margin-top: 3rem;
`;

const bottomStyles = css`
  position: absolute;
  bottom: 50px;
  right: 0;
  font-family: "Cafe24Meongi-B-v1.0";
  font-size: 24px;
  width: 100%;
  padding: 14px 0;
  background: #fb8971;
  color: #dbdb77;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResizeDetector } from "react-resize-detector";
import { css } from "@emotion/react";
import Intro from "../components/main/Intro";
import PersonalProject from "../components/main/PersonalProject";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const { width, ref } = useResizeDetector();
  const trigger1Ref = useRef();
  const trigger2Ref = useRef();

  const to1Ref = useRef();

  const gsapTrigger1 = () => {
    const ani1 = gsap.timeline();
    ani1
      .to(to1Ref.current, {
        rotation: 720,
        scale: 0,
        borderRadius: 200,
      })
      .to(to1Ref.current, {
        rotation: 0,
        scale: 1,
        borderRadius: 20,
      });
    ScrollTrigger.create({
      animation: ani1,
      trigger: trigger1Ref.current,
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
    });
  };

  useEffect(() => {
    gsapTrigger1();
  }, []);

  return (
    <div ref={ref}>
      {width > 1439 ? (
        <>
          <Intro trigger1Ref={trigger1Ref} to1Ref={to1Ref} />
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

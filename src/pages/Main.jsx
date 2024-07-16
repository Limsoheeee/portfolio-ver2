import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useResizeDetector } from "react-resize-detector";
import { css } from "@emotion/react";
import Intro from "../components/main/Intro";
import PersonalProject from "../components/main/PersonalProject";

gsap.registerPlugin(useGSAP);

const Main = () => {
  const { width, ref } = useResizeDetector();
  const trigger1Ref = useRef();
  const trigger2Ref = useRef();

  const to1Ref = useRef();

  useGSAP(() => {
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
      trigger: trigger1Ref,
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
    });
  });

  return (
    <div ref={ref}>
      {width > 1439 ? (
        <>
          <section ref={trigger1Ref}>
            <Intro to1Ref={to1Ref} />
          </section>
          <section ref={trigger2Ref}>
            <PersonalProject />
          </section>
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

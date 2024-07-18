import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RestIntro = () => {
  const triggerRef = useRef();
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();
  const to4Ref = useRef();
  const to5Ref = useRef();
  const to6Ref = useRef();

  const gsapTrigger = () => {
    const ani = gsap.timeline();
    ani
      .from(to1Ref.current, { xPercent: 300 })
      .from(to2Ref.current, { xPercent: -300 })
      .from(to3Ref.current, { xPercent: 300 })
      .from(to4Ref.current, { xPercent: -300 })
      .from(to5Ref.current, { xPercent: 300 })
      .from(to6Ref.current, { xPercent: -300 });
    ScrollTrigger.create({
      animation: ani,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
    });
  };

  useGSAP(() => {
    gsapTrigger();
  }, []);

  return (
    <div css={rootStyles} ref={triggerRef}>
      <p ref={to1Ref}>Front-End Developer Portfolio</p>
      <p ref={to2Ref}>Front-End Developer Portfolio</p>
      <p ref={to3Ref}>Front-End Developer Portfolio</p>
      <p ref={to4Ref}>Front-End Developer Portfolio</p>
      <p ref={to5Ref}>Front-End Developer Portfolio</p>
      <p ref={to6Ref}>Front-End Developer Portfolio</p>
    </div>
  );
};

export default RestIntro;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  background-color: #dbdb77;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden !important;
  p {
    font-family: "HS-Regular";
    font-size: 72px;
    color: #fb8971;
  }
`;

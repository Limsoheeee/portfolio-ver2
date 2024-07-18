import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  const triggerRef = useRef();
  const to1Ref = useRef();

  const gsapTrigger = () => {
    const ani = gsap.timeline();
    ani
      .to(to1Ref.current, { scale: 60, duration: 2 })
      .to(to1Ref.current, { autoAlpha: 0 });
    ScrollTrigger.create({
      animation: ani,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      //   markers: true,
    });
  };

  useGSAP(() => {
    gsapTrigger();
  }, []);

  return (
    <div ref={triggerRef} css={rootStyles}>
      <p ref={to1Ref}>Invisible</p>
    </div>
  );
};

export default Introduce;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  background-color: #fb8971;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden !important;
  p {
    color: #f7e6e9;
    font-family: "HS-Regular";
    font-size: 72px;
  }
`;

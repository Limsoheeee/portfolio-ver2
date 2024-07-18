import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroduceComment = () => {
  const triggerRef = useRef();
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();
  const to4Ref = useRef();
  const to5Ref = useRef();
  const to6Ref = useRef();
  const to7Ref = useRef();

  const gsapTrigger = () => {
    const ani = gsap.timeline();
    ani
      .from(to1Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to2Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to3Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to4Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to5Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to6Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
      .from(to7Ref.current, { autoAlpha: 0, duration: 1, y: 50 }, "+=1");
    ScrollTrigger.create({
      animation: ani,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=6000",
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
    <div ref={triggerRef} css={rootStyles}>
      <p ref={to1Ref}>저는 조용히 빛나는 </p>
      <p ref={to2Ref}>숨은 영웅이 되고 싶습니다.</p>
      <p ref={to3Ref}>동시통역사처럼</p>
      <p ref={to4Ref}>눈에 보이지는 않지만</p>
      <p ref={to5Ref}>뒤에서 중요한 역할을 </p>
      <p ref={to6Ref}>수행하는 invisible한 </p>
      <p ref={to7Ref}>개발자 임소희입니다.</p>
    </div>
  );
};

export default IntroduceComment;

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
    font-size: 5vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fb8971;
    width: 100%;
    text-align: center;
  }
`;

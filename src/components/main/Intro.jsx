import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../../assets/Image/background.png";
import introMain from "../../assets/Image/introMain.png";
import introText from "../../assets/Image/introText.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const trigger1Ref = useRef();

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

  useGSAP(() => {
    gsapTrigger1();
  }, []);

  return (
    <div ref={trigger1Ref} css={rootStyles(background)}>
      <div css={nameNav}>Front-end portfolio</div>
      <div css={innerStyles(background)}>
        <div ref={to1Ref} css={imageWrapper}>
          <img css={textImage} src={introText} alt="text" />
          <img css={mainImage} src={introMain} alt="main" />
        </div>
      </div>
      <div css={bottomStyles}>DO YOU WANT TO SEE MORE? SCROLL DOWM</div>
    </div>
  );
};

export default Intro;

const rootStyles = (background) => css`
  width: 100%;
  height: 100vh;
  background-color: #f4eee0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden !important;
`;

const nameNav = css`
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  font-family: "Cafe24Meongi-B-v1.0";
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 2rem;
`;

const innerStyles = (background) => css`
  width: 90%;
  max-width: 1640px;
  height: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

const imageWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  gap: 1rem;
`;

const mainImage = css`
  width: 406px;
  height: 502px;
`;
const textImage = css`
  width: 476px;
  height: 473px;
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
  color: #f4eee0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

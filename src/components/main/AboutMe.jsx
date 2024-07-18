import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stack from "../../assets/Image/aboutStack.png";
import history from "../../assets/Image/aboutHistory.png";
import project from "../../assets/Image/aboutProject.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const triggerRef3 = useRef();
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();

  const itemList = [
    {
      no: 1,
      imgSrc: stack,
      alt: "기술스택",
      ref: to1Ref,
    },
    {
      no: 2,
      imgSrc: history,
      alt: "경력사항",
      ref: to2Ref,
    },
    {
      no: 3,
      imgSrc: project,
      alt: "프로젝트",
      ref: to3Ref,
    },
  ];

  const gsapTrigger = () => {
    const ani3 = gsap.timeline();
    ani3
      .from(to1Ref.current, { y: -100, autoAlpha: 0, borderRadius: 200 })
      .from(to2Ref.current, { y: 100, autoAlpha: 0, borderRadius: 200 })
      .from(to3Ref.current, { y: -100, autoAlpha: 0, borderRadius: 200 });
    ScrollTrigger.create({
      animation: ani3,
      trigger: triggerRef3.current,
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: false,
    });
  };
  useGSAP(() => {
    gsapTrigger();
  }, []);

  return (
    <div css={rootStyles} ref={triggerRef3}>
      <div css={titleWrap}>About Me</div>
      <div css={innerWrap}>
        <div css={imgWrap}>
          {itemList.map((item) => (
            <div key={item.no} css={imgItem} ref={item.ref}>
              <img src={item.imgSrc} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
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
const imgWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;
  margin-top: 5rem;
`;

const innerWrap = css`
  height: calc(100vh - 120px);
`;

const imgItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 391px;
  }
  p {
    font-size: 14px;
    margin-top: 0.5rem;
  }
`;

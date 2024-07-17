import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../../assets/Image/projectDescBackground.png";
import missgo from "../../assets/Image/missgo.png";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectDesc = () => {
  const navigate = useNavigate();
  const triggerRef = useRef();
  const toRef = useRef();

  const navigateToNextPage = () => {
    navigate("/project");
  };

  const gsapTrigger = () => {
    const ani1 = gsap.timeline();
    ani1.from(toRef.current, {
      autoAlpha: 0,
      scale: 5,
      width: "100vw",
      height: "100vh",
    });
    ScrollTrigger.create({
      animation: ani1,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
      onLeave: () => navigateToNextPage(),
      //* 페이지 온클릭이벤트, 함수처리
    });
  };

  useGSAP(() => {
    gsapTrigger();
  }, []);

  const text =
    "기능 설명 기능설명기능 설명 기능설명 \n 기능기능기능 \n기능 설명 기능설명기능 설명  ";

  return (
    <div ref={triggerRef} css={rootStyles}>
      <div css={innerStyles(background)}>
        <img ref={toRef} css={mainImage} src={missgo} alt="missgo" />
      </div>
      <div css={descWrap}>
        <b>Missgo - PC.ver 주요기능</b>
        <li>기능 기능 기능 기능</li>
        <span className="descText">{text}</span>
        <li>기능 기능 기능 기능</li>
        <span className="descText">{text}</span>
      </div>
      <div css={linkWrap}>website 바로가기</div>
      <div css={bottomStyles}>Missgo PC.ver</div>
    </div>
  );
};

export default ProjectDesc;

const rootStyles = css`
  font-family: "IM_Hyemin-Bold";
  width: 100%;
  height: 100vh;
  background-color: #fb8971;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden !important;
`;

const innerStyles = (background) => css`
  width: 100%;
  max-width: 1640px;
  height: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

const mainImage = css`
  position: absolute;
  left: 20%;
  bottom: 25%;
  width: 425px;
`;

const bottomStyles = css`
  position: absolute;
  bottom: 50px;
  right: 0;
  font-family: "Cafe24Meongi-B-v1.0";
  font-size: 24px;
  width: 100%;
  padding: 14px 0;
  background: #f7e6e9;
  color: #fb8971;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const descWrap = css`
  position: absolute;
  width: 428px;
  height: 365px;
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "IM_Hyemin-Bold";
  color: #ffffff;
  b {
    font-size: 26px;
    margin-bottom: 20px;
  }
  li {
    font-size: 20px;
    margin: 15px 0;
  }
  .descText {
    font-size: 13px;
    white-space: pre-wrap;
  }
`;

const linkWrap = css`
  position: absolute;
  bottom: 120px;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  padding: 19px 61px;
  border: 2px solid #ffffff;
  color: #ffffff;
  border-radius: 50px;
  font-size: 18px;
`;

import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../../assets/Image/projectDescBackground.png";
import missgo from "../../assets/Image/missgo.png";
import { useNavigate } from "react-router-dom";
import { historyData } from "../../utils/useData";

gsap.registerPlugin(ScrollTrigger);

const ProjectDesc = () => {
  const navigate = useNavigate();
  const triggerRef = useRef();
  const toRef = useRef();

  const item = historyData.slice(0, 1);

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
      markers: false,
      // onLeave: () => navigateToNextPage(),
      //* 페이지 온클릭이벤트, 함수처리
    });
  };

  useGSAP(() => {
    gsapTrigger();
  }, []);

  return (
    <div ref={triggerRef} css={rootStyles}>
      <div css={innerStyles(background)}>
        <div css={contentWrapper}>
          <div css={imageWrap}>
            <img
              ref={toRef}
              css={mainImage}
              src={item[0].imgSrc}
              alt={item.title}
            />
          </div>
          <div css={descWrap}>
            <b>{item[0].title} 주요기능</b>
            {item[0].skill.map((skill) => (
              <div key={skill.no}>
                <li>{skill.title}</li>
                <span className="descText">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href={item[0].link} target="_blank">
        <div css={linkWrap}>
          {item[0].type === "web" ? "website 바로가기" : "app 다운로드"}
        </div>
      </a>
      <div css={bottomStyles}>{item[0].title}</div>
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
`;

const mainImage = css`
  width: 60%;
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
  /* position: absolute;
  right: 10%; */
  width: 428px;
  height: 365px;
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
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
`;

const contentWrapper = css`
  width: 80%;
  height: 581px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`;

const imageWrap = css`
  width: 50%;
  height: 581px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

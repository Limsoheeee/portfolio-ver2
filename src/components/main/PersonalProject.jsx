import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../../assets/Image/personalP1.png";
import project2 from "../../assets/Image/personalP2.png";
import project3 from "../../assets/Image/personalP3.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PersonalProject = () => {
  const triggerRef2 = useRef();
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();

  const itemList = [
    {
      no: 1,
      imgSrc: project2,
      alt: "project2",
      ref: to1Ref,
      title: "CANYA - react",
      period: "2022.11 ~ 2022.12",
    },
    {
      no: 2,
      imgSrc: project3,
      alt: "project3",
      ref: to2Ref,
      title: "ARTIZEN - react native",
      period: "2023.01 ~ 2023.02",
    },
    {
      no: 3,
      imgSrc: project1,
      alt: "project1",
      ref: to3Ref,
      title: "PORTFOLIO V1 - Next.Js",
      period: "2023.07 ~ 2023.08",
    },
  ];

  const gsapTrigger = () => {
    const ani2 = gsap.timeline();
    ani2
      .from(to1Ref.current, { y: -100, autoAlpha: 0, borderRadius: 200 })
      .from(to2Ref.current, { y: 100, autoAlpha: 0, borderRadius: 200 })
      .from(to3Ref.current, { y: -100, autoAlpha: 0, borderRadius: 200 });
    ScrollTrigger.create({
      animation: ani2,
      trigger: triggerRef2.current,
      start: "top top",
      end: "+=1000",
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
    <div css={rootStyles} ref={triggerRef2}>
      <div css={titleWrap}>Personal Front-end Project</div>
      <div css={innerWrap}>
        <div css={imgWrap}>
          {itemList.map((item) => (
            <div key={item.no} css={imgItem} ref={item.ref}>
              <img src={item.imgSrc} alt={item.alt} />
              <div css={tagWrap}>{item.title}</div>
              <p>{item.period}</p>
            </div>
          ))}
        </div>
      </div>
      <div css={bottomStyles}>PROJECT</div>
    </div>
  );
};

export default PersonalProject;

const rootStyles = css`
  width: 100%;
  height: 100vh;
  background-color: #fb8971;
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
    width: 300px;
  }
  p {
    font-size: 14px;
    margin-top: 0.5rem;
  }
`;

const tagWrap = css`
  width: 264px;
  padding: 19px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #f4eee0;
  box-sizing: border-box;
  border: 5px solid #ffffff;
  font-family: "IM_Hyemin-Bold";
  margin-top: 30px;
  font-weight: 700;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
`;

const bottomStyles = css`
  position: absolute;
  bottom: 50px;
  right: 0;
  font-family: "Cafe24Meongi-B-v1.0";
  font-size: 24px;
  width: 100%;
  padding: 14px 0;
  background: #dbdb77;
  color: #fb8971;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import web1 from "../../assets/Image/web1.png";
import web2 from "../../assets/Image/web2.png";
import web3 from "../../assets/Image/web3.png";
import web4 from "../../assets/Image/web4.png";

gsap.registerPlugin(ScrollTrigger);

const WebProject = () => {
  const triggerRef = useRef();
  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();
  const to4Ref = useRef();
  const itemList = [
    {
      no: 1,
      imgSrc: web1,
      alt: "web1",
      ref: to1Ref,
      title: "criminal IP - Next.Js",
    },
    {
      no: 2,
      imgSrc: web2,
      alt: "web2",
      ref: to2Ref,
      title: "Missgo 부동산 PC.ver-Next.Js",
    },
    {
      no: 3,
      imgSrc: web3,
      alt: "web3",
      ref: to3Ref,
      title: "Missgo 부동산 webApp - react ",
    },
    {
      no: 4,
      imgSrc: web4,
      alt: "web4",
      ref: to4Ref,
      title: "Missgo 부동산 landing - Next.Js ",
    },
  ];

  const gsapTrigger = () => {
    const ani = gsap.timeline();
    ani.from([to1Ref.current, to2Ref.current, to3Ref.current, to4Ref.current], {
      autoAlpha: 0,
      y: -100,
      ease: "back.out(4)",
      // stagger: 0.1
      stagger: {
        amount: 4,
        from: "random",
      },
    });
    ScrollTrigger.create({
      animation: ani,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=4000",
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
      <div css={nameNav}>Portfolio of projects carried out by the company</div>
      <div css={innerWrap}>
        <div css={imgWrap}>
          {itemList.map((item) => (
            <div key={item.no} css={imgItem} ref={item.ref}>
              <img src={item.imgSrc} alt={item.alt} />
              <div css={tagWrap}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div css={bottomStyles}>WEBSITE | Mobile</div>
    </div>
  );
};

export default WebProject;

const rootStyles = css`
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

const innerWrap = css`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const imgItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 275px;
  }
  p {
    font-size: 14px;
    margin-top: 0.5rem;
  }
`;

const imgWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;
  padding-bottom: 10rem;
`;

const tagWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "IM_Hyemin-Bold";
  margin-top: 30px;
  font-weight: 700;
`;

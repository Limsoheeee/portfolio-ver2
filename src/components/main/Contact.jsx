import React, { useRef } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introMain from "../../assets/Image/introMain.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const triggerRef = useRef();

  const to1Ref = useRef();
  const to2Ref = useRef();
  const to3Ref = useRef();
  const to4Ref = useRef();

  const gsapTrigger = () => {
    const ani = gsap.timeline();
    ani
      .from(to1Ref.current, { x: innerWidth * -1 })
      .from(to2Ref.current, { x: innerWidth * -1 })
      .from(to3Ref.current, { x: innerWidth * -1 })
      .from(to4Ref.current, { x: innerWidth * 1, rotation: 360, scale: 1.5 });
    ScrollTrigger.create({
      animation: ani,
      trigger: triggerRef.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      //   markers: false,
    });
  };

  useGSAP(() => {
    gsapTrigger();
  }, []);

  return (
    <div css={rootStyles} ref={triggerRef}>
      <div css={nameNav}>Contact</div>
      <div css={innerStyles}>
        <div css={imageWrapper}>
          <div css={infoTextWrap}>
            <div className="textContainer " ref={to1Ref}>
              <span>E-mail</span>
              <p>
                <a
                  href="mailto: v_vsoi@naver.com"
                  title="메일 전송"
                  target="_blank"
                >
                  v_vsoi@naver.com
                </a>
              </p>
            </div>
            <div className="textContainer " ref={to2Ref}>
              <span>Github</span>
              <p>
                <a
                  href="https://github.com/Limsoheeee"
                  title="깃헙이동"
                  target="_blank"
                >
                  https://github.com/Limsoheeee
                </a>
              </p>
            </div>
            <div className="textContainer " ref={to3Ref}>
              <span>Notion</span>
              <p>
                <a
                  href="https://ssocode.notion.site/c92e585f37d4452181be03d7de35b834"
                  title="노션이동"
                  target="_blank"
                >
                  https://ssocode.notion.site/c92e585f37d4452181be03d7de35b834
                </a>
              </p>
            </div>
          </div>
          <img ref={to4Ref} css={mainImage} src={introMain} alt="main" />
        </div>
      </div>
      <div css={bottomStyles}>©2024 Limsohee. All Rights Reserved.</div>
    </div>
  );
};

export default Contact;

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
  background-color: #fb8971;
  color: #f7e6e9;
  font-family: "Cafe24Meongi-B-v1.0";
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 2rem;
`;

const innerStyles = css`
  width: 90%;
  max-width: 1640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

const imageWrapper = css`
  display: flex;
  align-items: flex-end;
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
  font-family: "SUITE-Regular";
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  padding: 14px 0;
  background: #177d89;
  color: #f4eee0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const infoTextWrap = css`
  width: 476px;
  font-family: "SUITE-Regular";
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #fb8971;
  .textContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
  }
  span {
    text-decoration: underline;
    font-weight: 700;
    margin-bottom: 4px;
  }
  a {
    color: #fb8971;
    text-decoration-line: none;
  }
`;

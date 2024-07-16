/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import background from "../../assets/Image/background.png";
import introMain from "../../assets/Image/introMain.png";
import introText from "../../assets/Image/introText.png";

const Intro = () => {
  return (
    <div css={rootStyles(background)}>
      <div css={nameNav}>Front-end portfolio</div>
      <div css={innerStyles(background)}>
        <div css={imageWrapper}>
          <img className="textImage" src={introText} alt="text" />
          <img className="mainImage" src={introMain} alt="main" />
        </div>
      </div>
      <div css={bottomStyles}>DO YOU WANT TO SEE MORE? SCROLL DOWM↓</div>
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
  font-family: "IM_Hyemin-Bold";
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
  .mainImage {
    width: 406px;
    height: 502px;
  }
  .textImage {
    width: 476px;
    height: 473px;
  }
`;

const bottomStyles = css`
  position: absolute;
  bottom: 22px;
  right: 0;
  font-family: "IM_Hyemin-Bold";
  width: 100%;
  padding: 28px 0;
  background: #fb8971;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React from "react";
import { css } from "@emotion/react";
import background from "../../assets/Image/projectDescBackground.png";
import { useNavigate } from "react-router-dom";

const ProjectLayout = ({ item, isFirst }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <div css={rootStyles}>
      <div css={innerStyles(background)}>
        <div css={contentWrapper}>
          <div css={imageWrap}>
            <img css={mainImage} src={item.imgSrc} alt={item.title} />
          </div>
          <div css={descWrap}>
            <b>{item.title} 주요기능</b>
            {item.skill.map((skill) => (
              <div key={skill.no}>
                <li>{skill.title}</li>
                <span className="descText">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href={item.link} target="_blank">
        <div css={linkWrap}>
          {item.type === "web" ? "website 바로가기" : "app 다운로드"}
        </div>
      </a>
      <div css={bottomStyles}>{item.title}</div>
    </div>
  );
};

export default ProjectLayout;

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
  border-top: 1px solid #f7e6e9;
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
  width: 60%;
  min-width: 278px;
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
  right: 20%; */
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

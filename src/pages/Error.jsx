import React from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <div css={wrapper}>
      <p>잘못된 경로입니다.</p>
      <div css={btnWrapper} onClick={onClickHandler}>
        홈으로 이동
      </div>
    </div>
  );
};

export default Error;
const wrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "IM_Hyemin-Bold";
  background-color: #f7e6e9;
  color: #fb8971;
  font-size: 24px;
  gap: 20px;
`;

const btnWrapper = css`
  padding: 19px 40px;
  border-radius: 50px;
  border: 2px solid #fb8971;
  font-size: 18px;
  cursor: pointer;
`;

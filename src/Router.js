import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import Main from "./pages/Main";
import Error from "./pages/Error";

const Router = () => {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
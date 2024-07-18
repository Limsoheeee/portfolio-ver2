import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Project from "./components/main/Project";

const Router = () => {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;

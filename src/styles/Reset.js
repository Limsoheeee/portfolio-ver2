import { css } from "@emotion/react";
import "./global.css";

const reset = css`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "IM_Hyemin-Bold ", "sans-serif";
  }
  body {
    background-color: rgba(255, 255, 255, 0);
    overflow: hidden;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  button {
    color: #000000;
    background-color: transparent;
    border: none;
    outline: none;
  }
  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  #root::-webkit-scrollbar {
    overflow: hidden !important;
    -webkit-appearance: none !important;
    display: none !important;
  }
`;

export default reset;

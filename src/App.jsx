import Router from "./Router";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./utils/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;

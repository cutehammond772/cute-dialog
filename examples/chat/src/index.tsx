import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./global.style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);

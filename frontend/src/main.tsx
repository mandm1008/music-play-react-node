import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle";
import { MusicProvider } from "./components/store";
import Toast from "./tools/toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <MusicProvider>
        <App />
        <Toast />
      </MusicProvider>
    </GlobalStyle>
  </React.StrictMode>
);

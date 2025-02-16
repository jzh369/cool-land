import "antd/es/style/reset.css";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
dayjs.locale("zh-cn");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

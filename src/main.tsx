import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ConfigProvider, theme } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import { ThemeConfig } from "antd/lib/index";

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#0f0f10",
    colorInfo: "#0f0f10",
    wireframe: false,
  },
  components: {
    Button: {
      colorBgContainer: "#292929",
      defaultHoverBg: "#333",
      colorText: "#ececec",
      defaultHoverColor: "#ececec",
      defaultActiveBg: "#292929",
      defaultActiveColor: "#ececec",
    },
  },
  algorithm: theme.darkAlgorithm,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={ru_RU} theme={themeConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

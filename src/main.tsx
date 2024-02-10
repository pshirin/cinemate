import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ConfigProvider, theme } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import { ThemeConfig } from "antd/lib/index";

import Routes from "./routes/Routes.tsx";

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#0f0f10",
    colorBgBase: "#0f0f10",
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
      defaultBorderColor: "#333",
      borderRadius: 12,
      borderRadiusLG: 12,
      borderRadiusSM: 12,
      borderRadiusXS: 12,
    },
    Layout: {
      headerBg: "#0f0f10",
    },
    Dropdown: {
      borderRadiusLG: 12,
      borderRadiusSM: 8,
    },
  },
  algorithm: theme.darkAlgorithm,
};
{
  /* <App /> */
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={ru_RU} theme={themeConfig}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ConfigProvider>
);

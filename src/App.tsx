import { Layout, App as Wrapper } from "antd";
import styles from "./App.module.scss";
import { Header } from "./components";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";

const App = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <Layout className={styles.layout}>
        <Header />
        <Content className={styles.main}>
          <Outlet />
        </Content>
      </Layout>
    </Wrapper>
  );
};

export default App;

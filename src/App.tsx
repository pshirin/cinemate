import { Layout, App as Wrapper } from "antd";
import { useGetGenresQuery } from "./redux/api";
import styles from "./App.module.scss";
import { Header } from "./components";

function App() {
  // const { data, isError } = useGetGenresQuery();
  // console.log({ data, isError });
  return (
    <Wrapper className={styles.wrapper}>
      <Layout className={styles.layout}>
        <Header />
      </Layout>
    </Wrapper>
  );
}

export default App;

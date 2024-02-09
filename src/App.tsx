import { Button, Layout, App as Wrapper } from "antd";
import { useGetGenresQuery } from "./redux/api";
import styles from "./App.module.scss";

function App() {
  // const { data, isError } = useGetGenresQuery();
  // console.log({ data, isError });
  return (
    <Wrapper className={styles.wrapper}>
      <Layout className={styles.layout}>
        <Button>Меню</Button>
      </Layout>
    </Wrapper>
  );
}

export default App;

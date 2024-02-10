import { Button, Catalog, Logo, Search } from "..";
import { Layout } from "antd";
import styles from "./Header.module.scss";

const { Header: Wrapper } = Layout;

export const Header = () => {

  return (
    <Wrapper className={styles.header}>
      <Logo />
      <Catalog />
      <Search />
      <Button size="large">Войти</Button>
    </Wrapper>
  );
};

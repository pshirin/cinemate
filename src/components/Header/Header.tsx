import { Button, Logo } from "..";
import { Layout } from "antd";
import { HiMenu } from "react-icons/hi";
import styles from "./Header.module.scss";

const { Header: Wrapper } = Layout;

export const Header = () => {
  return (
    <Wrapper className={styles.header}>
      <Logo />
      <Button size="large" icon={<HiMenu />}>
        Каталог
      </Button>
    </Wrapper>
  );
};

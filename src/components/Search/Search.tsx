import { default as AntSearch } from "antd/es/input/Search";
import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <AntSearch
      placeholder="Назавание фильма"
      allowClear
      size="large"
      className={styles.search}
    />
  );
};

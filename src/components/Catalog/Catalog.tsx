import { Dropdown } from "antd";
import { HiMenu } from "react-icons/hi";
import { Button } from "..";
import { MenuProps } from "antd/lib";
import styles from "./Catalog.module.scss";

const items: MenuProps["items"] = [
  {
    key: "1-1",
    label: "Фильмы",
    children: [
      {
        key: "2-1",
        label: "Категории",
      },
      {
        key: "2-2",
        label: "Подборки",
      },
    ],
  },
  {
    key: "1-2",
    label: "Мультфильмы",
  },
  {
    key: "2",
    label: "Сериалы",
  },
];

export const Catalog = () => {
  return (
    <Dropdown menu={{ items }} rootClassName={styles.menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Button size="large" icon={<HiMenu />}>
          Каталог
        </Button>
      </a>
    </Dropdown>
  );
};

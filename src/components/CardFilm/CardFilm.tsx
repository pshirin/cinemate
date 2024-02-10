import { Badge, Image, Popover, Space, Tag, Typography, theme } from "antd";
import { CARD_WIDTH } from "../../constants/constants";
import styles from "./CardFilm.module.scss";
import { HiOutlineInformationCircle } from "react-icons/hi";

const getMaxRating = (rating: Props["rating"]): number => {
  const aggregators = ["filmCritics", "imdb", "kp"];
  return aggregators.reduce((acc, cur) => {
    if (rating[cur] && Number(rating[cur]) > acc) {
      return Number(Number(rating[cur]).toFixed(2));
    }
    return acc;
  }, 0);
};

const getColor = (
  rating: number
): React.ComponentProps<typeof Badge>["color"] => {
  if (rating < 7) {
    if (rating < 5) {
      return "red";
    }
    if (rating < 6) {
      return "volcano";
    }
    return "orange";
  }
  if (rating > 9) {
    return "gold";
  }
  if (rating > 7) {
    return "green";
  }
  return "lime";
};

type Props = {
  src: string;
  rating: {
    await: null;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
    [key: string]: unknown;
  };
  shortDescription: string;
  name: string;
  genres: { name: string }[];
};

export const CardFilm: React.FC<Props> = ({
  src,
  rating,
  shortDescription,
  name,
  genres,
}) => {
  const maxRating = getMaxRating(rating);
  const color = getColor(maxRating);
  const { useToken } = theme;
  const {
    token: { colorIcon },
  } = useToken();

  const popoverDescription = () => (
    <Space direction="vertical" style={{ minWidth: "fit-content" }}>
      <Typography.Text>{shortDescription}</Typography.Text>
      <Space.Compact>
        {genres.map(({ name }) => (
          <Tag color="gold-inverse" bordered={false} key={name}>
            {name}
          </Tag>
        ))}
      </Space.Compact>
    </Space>
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Badge
          count={maxRating}
          showZero
          offset={[-30, 351 - 10]}
          color={color}
          style={{ zIndex: 1 }}
          styles={{
            indicator: {
              fontWeight: 900,
              color: "white",
              borderColor: color,
              width: 43,
            },
          }}
        >
          <Popover
            content={popoverDescription}
            overlayStyle={{ width: 320 }}
            placement="rightTop"
          >
            <HiOutlineInformationCircle
              size={30}
              className={styles.info}
              style={{
                color: colorIcon,
              }}
            />
          </Popover>
          <Image width={CARD_WIDTH} height={359} src={src} />
        </Badge>
      </div>
      <Typography.Title level={4}>{name}</Typography.Title>
    </div>
  );
};

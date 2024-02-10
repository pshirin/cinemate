import { CARD_HEIGHT, CARD_WIDTH } from "../../constants/constants";
import { data } from "../../data";

const CardFilm = ({ src }) => {
  return (
    <div>
      <img width={CARD_WIDTH} height={CARD_HEIGHT} src={src} />
    </div>
  );
};
// flex-wrap: wrap;
// align-content: center;

const Skeletons = () => {
  const count = 20;
  const arr = Array.from({ length: count }, (_, i) => i + 1);

  return arr.map((e) => (
    <li key={e}>
      <div
        style={{
          border: "1px red solid",
          width: "100%",
          minHeight: CARD_HEIGHT,
        }}
      />
    </li>
  ));
};

export const Main = () => {
  return (
    <ul
      style={{
        display: "grid",
        minWidth: "100%",
        gridTemplateColumns: `repeat(auto-fit, ${CARD_WIDTH}px)`,
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.docs.map((e) => (
        <li key={e.id}>
          <CardFilm src={e.poster.previewUrl} />
        </li>
      ))}
      <Skeletons />
    </ul>
  );
};

Main.path = "/";

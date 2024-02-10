import { CardFilm, PromoSwiper, Skeletons } from "../../components";
import { CARD_WIDTH } from "../../constants/constants";
import { data } from "../../data";

export const Main = () => {
  return (
    <div
      style={{
        paddingTop: 30,
        display: "flex",
        gap: 30,
        flexDirection: "column",
      }}
    >
      <PromoSwiper />
      <ul
        style={{
          display: "grid",
          minWidth: "100%",
          gridTemplateColumns: `repeat(auto-fit, ${CARD_WIDTH}px)`,
          gridTemplateRows: `repeat(auto-fit, 1fr)`,
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data?.docs.map((e) => (
          <li key={e.id} style={{ display: "block", minHeight: "100%" }}>
            <CardFilm
              src={e.poster.previewUrl}
              rating={e.rating}
              shortDescription={e.shortDescription}
              name={e.name}
              genres={e.genres}
            />
          </li>
        ))}
        <Skeletons />
      </ul>
    </div>
  );
};

Main.path = "/";

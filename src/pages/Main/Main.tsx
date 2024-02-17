import { useCallback, useEffect, useRef, useState } from "react";
import { CardFilm, Skeletons } from "../../components";
import { CARD_WIDTH } from "../../constants/constants";
import { useGetAllQuery } from "../../redux/api";
import { ApiFilm } from "../../redux/types";

export const Main = () => {
  const filmsContainerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const { data, isSuccess } = useGetAllQuery({ page, limit: 50 });
  const [filmsPull, setFilmsPull] = useState<ApiFilm[] | []>([]);

  const callbackObserver: IntersectionObserverCallback = useCallback(
    ([entrie]) => {
      if (isSuccess) {
        setPage((p) => p + 1);
      }
    },
    [isSuccess]
  );

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  useEffect(() => {
    const scrollTriggerElement = filmsContainerRef.current?.querySelector(
      "#first-pagination-scroll-element"
    );
    const observer = new IntersectionObserver(callbackObserver, options);
    if (scrollTriggerElement) observer.observe(scrollTriggerElement);
    return () => {
      if (scrollTriggerElement) observer.unobserve(scrollTriggerElement);
    };
  }, []);

  useEffect(() => {
    if (data?.docs) {
      setFilmsPull((p) => [...p, ...data.docs]);
    }
  }, [data]);

  return (
    <div
      ref={filmsContainerRef}
      style={{
        paddingTop: 30,
        display: "flex",
        gap: 30,
        flexDirection: "column",
      }}
    >
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
        {filmsPull?.map((e, i) => (
          <li
            key={`${e.id} ${i}`}
            style={{ display: "block", minHeight: "100%" }}
          >
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

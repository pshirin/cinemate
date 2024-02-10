import { Carousel, Image, Skeleton } from "antd";
import { useGetWorldPremiereQuery } from "../../redux/api";
import styles from "./PromoSwiper.module.scss";
import { useState } from "react";

export const PromoSwiper = () => {
  const { data, isLoading } = useGetWorldPremiereQuery();
  const [isHover, setIsHover] = useState(false);

  if (isLoading) {
    return (
      <Skeleton.Image
        active
        style={{
          minHeight: 700,
          width: "100%",
          maxWidth: 1100,
          margin: "auto",
        }}
      />
    );
  }
  const onMouseEnterHandler = () => {
    setIsHover(true);
    console.log("event");
  };
  const onMouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <Carousel
      swipe
      draggable
      swipeToSlide
      className={styles.carousel}
      autoplay
      adaptiveHeight
      pauseOnHover
      centerMode
      pauseOnDotsHover
      style={{ width: "100%", maxWidth: 1100, margin: "auto" }}
    >
      {data?.docs.map((e) => (
        <span
          key={e.id}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {e.logo?.url && isHover && (
              <div style={{ position: "absolute", zIndex: 2 }}>
                <Image src={e.logo.url} width={300} />
              </div>
            )}
            <Image width={"100%"} src={e.backdrop.url} />
          </div>
        </span>
      ))}
    </Carousel>
  );
};

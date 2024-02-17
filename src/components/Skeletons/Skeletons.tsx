import { Skeleton } from "antd";

export const Skeletons: React.FC = () => {
  const count = 20;
  const arr = Array.from({ length: count }, (_, i) => i + 1);

  return arr.map((e, i) => (
    <li
      key={e}
      id={!i ? "first-pagination-scroll-element" : undefined}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 400,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: 361,
        }}
      >
        <Skeleton.Image active style={{ minHeight: 361, minWidth: 236 }} />
      </div>
      <div>
        <Skeleton
          title={{ width: 150, style: { height: 20 } }}
          paragraph={false}
          active
        />
      </div>
    </li>
  ));
};

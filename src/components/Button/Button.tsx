import { Button as AntButton } from "antd";
import styles from "./Button.module.scss";

type Props = React.ComponentProps<typeof AntButton> & { width?: number };

export const Button: React.FC<Props> = ({
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  children,
  width,
  ...props
}) => {
  const mouseLeaveHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onMouseLeave?.(e);
  };

  const onMouseEnterHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    onMouseEnter?.(e);
  };

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onMouseMove?.(e);
  };
  return (
    <AntButton
      onMouseMove={onMouseMoveHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={styles.button}
      classNames={{ icon: styles.icon }}
      style={{
        minWidth: width,
      }}
      {...props}
    >
      {children}
    </AntButton>
  );
};

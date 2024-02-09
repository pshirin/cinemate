import logo from "../../assets/logo.svg";

type Props = {
  width?: number;
};

export const Logo = ({ width }: Props): React.ReactElement => (
  <img width={width ?? 150} src={logo}></img>
);

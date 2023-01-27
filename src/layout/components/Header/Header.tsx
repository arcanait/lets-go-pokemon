import { FC } from "react";
import { HeaderWrapper } from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;

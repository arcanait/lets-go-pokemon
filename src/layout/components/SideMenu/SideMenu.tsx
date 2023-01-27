import { FC } from "react";
import { SideMenuWrapper } from "./styles";

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
  return <SideMenuWrapper></SideMenuWrapper>;
};

SideMenu.defaultProps = {};

SideMenu.propTypes = {};

export default SideMenu;

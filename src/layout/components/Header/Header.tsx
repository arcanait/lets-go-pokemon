import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Label from "../../../components/display/Label/Label";
import InputSearch from "../../../components/form/InputSearch/InputSearch";

// Styles
import { HeaderWrapper } from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <div className="brand-container" onClick={() => navigate("/")}>
        <Label fontFamily="pokemon" color="yellow" fontSize="s-32">
          Lest-Go-Pokemon
        </Label>
      </div>
      <InputSearch />
    </HeaderWrapper>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;

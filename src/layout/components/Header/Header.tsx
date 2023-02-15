import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Store
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import searchContentReducer from "../../../store/searchContent/reducers";
import { updateSearchContent } from "../../../store/searchContent/actions";

// Components
import Label from "../../../components/display/Label/Label";
import InputSearch from "../../../components/form/InputSearch/InputSearch";

// Styles
import { HeaderWrapper } from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const updateSearchContentState = (content: string) => {
    dispatch(searchContentReducer(updateSearchContent({ data: content })));
  };

  return (
    <HeaderWrapper>
      <div className="brand-container" onClick={() => navigate("/")}>
        <Label fontFamily="pokemon" color="yellow" fontSize="s-32">
          Lest-Go-Pokemon
        </Label>
      </div>
      <InputSearch handleChange={updateSearchContentState} />
    </HeaderWrapper>
  );
};

export default Header;

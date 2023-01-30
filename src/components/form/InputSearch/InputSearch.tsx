import { FC, FormEvent, KeyboardEvent, useState } from "react";
import Search from "../../icons/Search";
import { InputSearchWrapper } from "./styles";

interface InputSearchProps {}

const InputSearch: FC<InputSearchProps> = () => {
  const [content, setContent] = useState("");

  const searchContentWhenEnter = (e: KeyboardEvent<HTMLElement>) => {
    if (e.which === 13) {
      console.log("guardar", content);
    }
  };

  const searchContentWhenClick = () => {
    console.log("guardar", content);
  };

  const addValueToState = (e: FormEvent<HTMLInputElement>) => {
    setContent((e.target as HTMLInputElement).value);
  };

  return (
    <InputSearchWrapper>
      <i onClick={() => searchContentWhenClick()}>
        <Search />
      </i>
      <input
        type="search"
        name="search"
        value={content}
        placeholder="Buscar pokemon..."
        onKeyDown={searchContentWhenEnter}
        onChange={addValueToState}
      />
    </InputSearchWrapper>
  );
};

export default InputSearch;

import { FC, FormEvent, KeyboardEvent, useState } from "react";
import Search from "../../icons/Search";
import { InputSearchWrapper } from "./styles";

interface InputSearchProps {
  handleChange: (content: string) => void;
}

const InputSearch: FC<InputSearchProps> = ({ handleChange }) => {
  const [content, setContent] = useState("");

  const searchContentWhenEnter = (e: KeyboardEvent<HTMLElement>) => {
    if (e.which === 13) {
      handleChange(content);
    }
  };

  const searchContentWhenClick = () => {
    handleChange(content);
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

import { FC } from "react";
import { IconsProps } from "./model";

const Search: FC<IconsProps> = ({
  width = "24",
  height = "24",
  fill = "none",
  color,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.75C14 11.6495 11.6495 14 8.75 14C5.85051 14 3.5 11.6495 3.5 8.75C3.5 5.85051 5.85051 3.5 8.75 3.5C11.6495 3.5 14 5.85051 14 8.75ZM12.865 13.4543C11.7656 14.4167 10.3259 15 8.75 15C5.29822 15 2.5 12.2018 2.5 8.75C2.5 5.29822 5.29822 2.5 8.75 2.5C12.2018 2.5 15 5.29822 15 8.75C15 10.3259 14.4167 11.7656 13.4543 12.865L17.378 16.7887C17.5407 16.9514 17.5407 17.2152 17.378 17.378C17.2152 17.5407 16.9514 17.5407 16.7887 17.378L12.865 13.4543Z"
        fill="white"
      />
    </svg>
  );
};

export default Search;

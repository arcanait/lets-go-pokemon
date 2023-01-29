import { FC } from "react";

import { LabelProps } from "./model";

import { LabelWrapper } from "./styles";
// TODO: Change all Labels to this new Label then Change name to Label
const Label: FC<LabelProps> = ({
  fontFamily = "montserrat",
  fontSize = "s-10",
  fontWeight = "w-400",
  color = "blue",
  as = "p",
  children,
  classLabel,
}) => {
  return (
    <LabelWrapper
      as={as}
      size={fontSize}
      colorLabel={color}
      family={fontFamily}
      weight={fontWeight}
      className={classLabel}
    >
      {children}
    </LabelWrapper>
  );
};

export default Label;

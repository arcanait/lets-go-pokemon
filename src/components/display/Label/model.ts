import { ReactNode } from "react";

export type familyType = "montserrat" | "pokemon";

export type sizeType = "s-10" | "s-12" | "s-14" | "s-16" | "s-24" | "s-32";

export type weightType = "w-400" | "w-600" | "w-700";

export type colorLabelType =
  | "blue"
  | "yellow"
  | "orange"
  | "red"
  | "green"
  | "grey"
  | "reallyGrey"
  | "black"
  | "purple";

export type asType = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface LabelProps {
  fontFamily?: familyType;
  fontSize?: sizeType;
  fontWeight?: weightType;
  color?: colorLabelType;
  children?: ReactNode;
  as?: asType;
  classLabel?: string;
}

export type fontFamilyType = {
  montserrat: string;
  montserratSemiBold: string;
  montserratBold: string;
  pokemon: string;
};
export type fontSizesType = {
  "s-10": number;
  "s-14": number;
  "s-16": number;
  "s-24": number;
  "s-32": number;
};
export type fontWeightsType = {
  "w-400": number;
  "w-600": number;
  "w-700": number;
};
export type colorsLabelType = {
  blue: string;
  yellow: string;
  orange: string;
  red: string;
  green: string;
  grey: string;
  purple: string;
  reallyGrey: string;
  black: string;
};

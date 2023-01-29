export const ROUTES = {
  INDEX: "/",
  POKEMON_DETAIL: "pokemon_detail",
};

export const SIZE = {
  MOBILE: "360px",
  TABLET: "768px",
  DESKTOP: "1280px",
};

export const MIN_WIDTH_QUERIES = {
  MOBILE: { query: `(min-width: ${SIZE.MOBILE})` },
  TABLET: { query: `(min-width: ${SIZE.TABLET})` },
  DESKTOP: { query: `(min-width: ${SIZE.DESKTOP})` },
};

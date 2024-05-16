export const dayCheck = (str) => {
  switch (str[str.length - 1]) {
    case "m":
      return str[0] + " oy";
    case "y":
      return str[0] + " yil";
    case "d":
      return str[0] + " kun";
    default:
      return "";
  }
};

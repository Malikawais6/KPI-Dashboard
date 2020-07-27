export const themeInterface = {
  light: {
    backgroundColors: {
      card: "#fff",
    },
    borderColors: {
      card: "#e6e6e6",
    },
    boxShadowColors: {
      card: "rgba(178, 178, 178, 0.29)",
    },
  },
  dark: {
    backgroundColors: {
      card: "#0c1427",
    },
    borderColors: {
      card: "#1b284b",
    },
    boxShadowColors: {
      card: "transparent",
    },
  },
  card: {
    borderRadius: "8px",
    bodyPadding: "20px",
    headerPadding: "10px 20px",
    hasBorder: true,
    hasBoxShadow: false,
    hasHeaderBorder: false,
  },
};

export const getNumberFromString = (tick) => {
  const month = tick.split(" ")[0];
  const number = tick.match(/(\d+)/)[0];
  return number % 2 === 0 ? `${month} ${number}` : "";
};

export const EXTENDED_DISCRETE_COLOR_RANGE = [
  "#19CDD7",
  "#DDB27C",
  "#88572C",
  "#FF991F",
  "#F15C17",
  "#223F9A",
  "#DA70BF",
  "#125C77",
  "#4DC19C",
  "#776E57",
  "#12939A",
  "#17B8BE",
  "#F6D18A",
  "#B7885E",
  "#FFCB99",
  "#F89570",
  "#829AE3",
  "#E79FD5",
  "#1E96BE",
  "#89DAC1",
  "#B3AD9E",
];

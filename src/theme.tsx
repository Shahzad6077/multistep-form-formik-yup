import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fb423b",
    },
    secondary: {
      main: "#fce1db",
    },
  },
});
theme.typography.h2 = {
  fontFamily: "Chibold, Quicksand, sans-serif",
  fontSize: "max(26px, min(6vw, 3.75rem))",
};
theme.typography.h3 = {
  fontFamily: "Chibold, Quicksand, sans-serif",
  fontSize: "max(18px, min(4vw, 2.75rem))",
};
export default theme;

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
      contrastText: "#fff"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "linear-gradient(to right, #3494e6, #ec6ead)"
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);
export default theme;

import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FE7E02",
      light: "#FEDBBA",
      dark: "#743A01",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#323B3F",
      light: "#ECEDED",
      dark: "#0E1112",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 16,
    color: {
      textPrimary: "#FE7E02",
    },
    h1: {
      fontSize: "6rem",
    },
    button: {
      fontWeight: 400,
      fontSize: "0.95rem",
    },
    overline: {
      fontSize: "0.75rem",
    },
    caption: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    }
  },
  spacing: 8,
})
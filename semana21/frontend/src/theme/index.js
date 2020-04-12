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
      light: "ECEDED",
      dark: "0E1112",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 16,
  },
  spacing: 8,
})
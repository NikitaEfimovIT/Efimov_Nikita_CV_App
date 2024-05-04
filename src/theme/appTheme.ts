import { createTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const appTheme = createTheme({
  typography: {
    fontFamily: "Oxanium",
  },
  palette: {
    primary: {
      main: "#05FF00",
      light: "rgba(5,255,0,0.27)",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#05FF00",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#fff",

          color: "#fff",
        },
        root: {
          width: "250px",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#05FF00",
            color: "#fff",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#05FF00",

            color: "#fff",
          },
          ["&.MuiOutlinedInput-root"]: {
            color: "#fff",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          [`&:hover`]: {
            color: "#05FF00",
          },
          [`&.Mui-focused`]: {
            color: "#05FF00",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
        },
        paper: {
          backgroundColor: "#011100",
          borderLeft: "1px solid #05ff00",
          width: "50%",
          display: "flex",
          justifyContent: "flex-end",
        },
      },
    },
  },
});

export default appTheme;

import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    typography: {
      fontFamily: ["Roboto"]
    },
    palette: {
      background: "#FFFFFF",
      primary: {
        main: "#3596B5"
      },
      secondary: {
        main:"#f4f6f8",
        icons: "#00506C"
      },
      shadow: "#dddddd",
      text: {
        primary: "#000000",
        secondary: "#ffffff"
      },
    }
  });
export const darkTheme=createTheme({
  typography: {
    fontFamily: ["Roboto"]
  },
  palette: {
    background: "#222222",
    overlay: "",
    tint: "#3596B5",
    
    primary: {
      main: "#3596B5"
    },
    secondary: {
      main:"#111111",
      icons: "#00C4FF"
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000"
    }
  }
});

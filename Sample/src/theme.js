import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "./themeOptions";

// Create a theme instance.
const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#556cd6"
      },
      secondary: {
        main: "#19857b"
      },
      error: {
        main: "#dc3545"
      }
    },
    overrides: {
      MuiButton: {
        root: {
          height: "55px", // ボタンの高さを55pxに設定
          borderRadius: "999px" // 角丸にする
        }
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#e2ebf4"
          }
        }
      }
    }
  },
  ThemeOptions
);
export default theme;

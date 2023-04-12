import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "../css/styles.css";

function Dashboard10() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="layout-a add-header">
        <Header />
        <main className="mainarea page-body-wrapper">
          <Box className="area-sidebar">
            <Sidebar />
          </Box>
          <Box className="area-contents">ダッシュボード</Box>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard10;

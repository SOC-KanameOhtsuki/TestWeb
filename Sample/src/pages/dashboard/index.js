import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems, thirdListItems } from "./listItems";
import Tabs from "../../components/Tabs";
import Table from "../../components/Table";
import { Icon } from "@mui/material";
import "../../css/materialdesignicons.css";

import ImglogoS from "../../../public/static/img/logo-S-color.svg";
//import Chart from "./Chart";
//import Deposits from "./Deposits";
//import Orders from "./Orders";
import "../../css/styles.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Copy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="bg-header">
          <Toolbar
            className="bg-menubuttonarea"
            sx={{
              pr: "18px" // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "30px",
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* welcome-text */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                component="p"
                variant="h6"
                color="inherit"
                noWrap
                className="welcome-text"
              >
                Hello,石田 太郎<span className="mini">さん</span>
              </Typography>
              <Typography
                component="p"
                variant="body2"
                color="inherit"
                noWrap
                className="welcome-sub-text"
              >
                未読のお知らせがあります。
              </Typography>
            </Box>
            <Box className="header-btns">
              <IconButton color="inherit">
                <Badge>
                  <Icon className="mdi mdi-star-outline menu-icon"></Icon>
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <Badge badgeContent={4} color="error">
                  <Icon className="mdi mdi-email-outline menu-icon"></Icon>
                </Badge>
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <Badge>
                  <Icon className="mdi mdi-account-circle-outline menu-icon"></Icon>
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              px: [1]
            }}
          >
            <Box className="area-logo">
              <Typography className="site-logo">
                <img src={ImglogoS} alt="" />
              </Typography>
              <Typography component="span" noWrap className="site-name">
                SKY WEB
              </Typography>
            </Box>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" className="sidenav">
            {thirdListItems}
            <Divider sx={{ my: 1 }} />
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
          className="bg-main"
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Tabs */}
              <Grid item xs={12} className="panel">
                <Paper>
                  <Tabs />
                </Paper>
              </Grid>
              {/* Table */}
              <Grid item xs={12} className="panel">
                <Paper>
                  <Table />
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper></Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240
                  }}
                ></Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                ></Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

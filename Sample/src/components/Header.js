import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ImglogoS from "../../public/static/img/logo-S-color.svg";

//import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';

import "../css/signin.css";
import "../css/simple-line-icons/css/simple-line-icons.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="header">
      <Toolbar>
        <div className="header-brand-wrapper">
          <div className="me-3">
            <span className="icon-menu"></span>
          </div>
          <span className="brand-logo">
            <img src={ImglogoS} alt="" />
            <Typography className="txt-logo">SKY WEB</Typography>
          </span>
        </div>
        <div className="header-menu-wrapper">
          <div className="welcome-text">
            <Typography className="welcome-user-text">
              Hello,石田太郎<small class="text-muted">さん</small>
            </Typography>
            <Typography className="welcome-sub-text">
              未読のお知らせがあります。
            </Typography>
          </div>
          <div className="navbar-nav">
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

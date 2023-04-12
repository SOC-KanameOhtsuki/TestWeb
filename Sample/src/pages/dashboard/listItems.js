import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import { Icon } from "@mui/material";
import "../../css/materialdesignicons.css";
import "../../css/simple-line-icons.css";

export const thirdListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="mdi mdi-grid-large menu-icon"></Icon>
      </ListItemIcon>
      <ListItemText primary="ダッシュボード" />
    </ListItemButton>
  </React.Fragment>
);

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" className="title-sidemenucat">
      CLIENT MENU
    </ListSubheader>
    <ListItemButton className="has-submenu">
      <Accordion className="accordion-sub1">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="ttl-sub1"
        >
          <span className="box-icon">
            <Icon className="mdi mdi-account-multiple-outline menu-icon"></Icon>
          </span>
          <Typography className="txt-submenu">新規顧客の開発</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion className="accordion-sub2">
            <AccordionSummary
              aria-controls="panel1b1-content"
              id="panel1b1-header"
            >
              <Typography className="txt-submenu">子メニュー</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion className="accordion-sub3">
                <AccordionSummary
                  aria-controls="panel1c1-content"
                  id="panel1c1-header"
                >
                  <Typography>孫メニュー</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="txt-submenu">
                    マゴマゴメニュー
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <Icon className="mdi mdi-database menu-icon"></Icon>
      </ListItemIcon>
      <ListItemText primary="顧客データベース" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="mdi mdi-chart-areaspline menu-icon"></Icon>
      </ListItemIcon>
      <ListItemText primary="営業活動" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="mdi mdi-floor-plan menu-icon"></Icon>
      </ListItemIcon>
      <ListItemText primary="営業図面検索(AIH)" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" className="title-sidemenucat">
      USER MENU
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="mdi mdi-account-circle-outline menu-icon"></Icon>
      </ListItemIcon>
      <ListItemText primary="ユーザー" />
    </ListItemButton>
  </React.Fragment>
);

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
//import Grid from "@mui/material/Grid";

import { Icon } from "@mui/material";
import "../css/materialdesignicons.css";
import "../css/simple-line-icons.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 480 },
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            icon={<Icon className="mdi mdi-star-outline mdi-icon"></Icon>}
            label="お気に入り"
            iconPosition="start"
            className="icon-tab"
            {...a11yProps(0)}
          />
          <Tab
            icon={<Icon className="mdi mdi-history mdi-icon"></Icon>}
            label="使用履歴(～10日間)"
            iconPosition="start"
            className="icon-tab"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box className="list-iconbtn col-5">
          <Box className="ban-iconbtn btn-square">
            <Link href="#" underline="none" className="">
              <Box className="inner-square">
                <Icon className="icon-people icon-lg"></Icon>
                <Typography className="txt-ban">顧客検索</Typography>
              </Box>
            </Link>
          </Box>
          <Box className="ban-iconbtn btn-square">
            <Link href="#" underline="none" className="">
              <Box className="inner-square">
                <Icon className="icon-magic-wand icon-lg"></Icon>
                <Typography className="txt-ban">納入実績照会</Typography>
              </Box>
            </Link>
          </Box>
          <Box className="ban-iconbtn btn-square">
            <Link href="#" underline="none" className="">
              <Box className="inner-square">
                <Icon className="icon-calendar icon-lg"></Icon>
                <Typography className="txt-ban">スケジュール</Typography>
              </Box>
            </Link>
          </Box>
          <Box className="ban-iconbtn btn-square">
            <Link href="#" underline="none" className="">
              <Box className="inner-square">
                <Icon className="icon-badge icon-lg"></Icon>
                <Typography className="txt-ban">見積承認</Typography>
              </Box>
            </Link>
          </Box>
          <Box className="ban-iconbtn btn-square">
            <Link href="#" underline="none" className="">
              <Box className="inner-square">
                <Icon className="icon-flag icon-lg"></Icon>
                <Typography className="txt-ban">業務依頼一覧</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}

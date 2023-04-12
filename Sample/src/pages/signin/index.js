import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImglogoS from "../../../public/static/img/logo-S-color.svg";
import ImgSKY from "../../../public/static/img/logo-skyweb.svg";
import ImgSecurity from "../../../public/static/img/i-security.svg";
import Typography from "@mui/material/Typography";

import SigninForm from "../../components/SigninForm";

import "../../css/signin.css";

const Signin = () => {
  return (
    <main>
      <Box className="area-logo text-center ssn-snow">
        <Box className="box-logo">
          <span className="logo-mark">
            <img src={ImglogoS} alt="" />
          </span>
          <h1 className="logo-txt">
            <span className="sitename">
              <img src={ImgSKY} alt="SKY WEB" />
            </span>
          </h1>
          <span className="logo-security">
            <img src={ImgSecurity} alt="" />
          </span>
        </Box>
      </Box>
      <div className="area-main">
        <Container maxWidth="sm">
          <Box sx={{ marginTop: 3 }}>
            <Typography className="catch-m">
              お客様に信頼と期待と喜びを
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Box sx={{ mt: 3 }}>
              <SigninForm />
            </Box>
          </Box>
        </Container>
      </div>
    </main>
  );
};

export default Signin;

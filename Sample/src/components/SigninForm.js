import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
//import Grid from "@mui/material/Grid";
//import FormControl from "@mui/material/FormControl";
//import MenuItem from "@mui/material/MenuItem";
//import ListSubheader from "@mui/material/ListSubheader";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Copyright from "./Copyright";

const theme = createTheme();

export default function SignIn() {
  //const handleSubmit = (event) => {
  //event.preventDefault();
  //const data = new FormData(event.currentTarget);
  //console.log({
  //userID: data.get("userID"),
  //password: data.get("password")
  //});
  //};

  //const [lang, setLang] = React.useState("");

  //const handleChange = (event: SelectChangeEvent) => {
  //setLang(event.target.value);
  //};

  return (
    <ThemeProvider theme={theme}>
      <Container component="div" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Box
            className="form-signin"
            component="form"
            //onSubmit={handleSubmit}
            noValidate
          >
            <Box className="form-item has-icon box-txtarea" sx={{ mb: 2 }}>
              <span className="icon i-user"></span>
              <TextField
                margin="none"
                variant="filled"
                required
                fullWidth
                id="userID"
                label="ユーザーID"
                name="userID"
              />
            </Box>
            <Box className="form-item has-icon box-txtarea" sx={{ mb: 2 }}>
              <span className="icon i-pw"></span>
              <TextField
                margin="none"
                variant="filled"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Box>

            <Stack direction="row" className="linktxt-center">
              <Typography>
                <Link
                  href="#"
                  variant="body2"
                  className="linktxt-dark has-arrow"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#333333",
                    textDecoration: "underline",
                    textDecorationColor: "#333333"
                  }}
                >
                  パスワードを忘れた方
                </Link>
              </Typography>
            </Stack>
            <Stack direction="row" className="btnarea">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="medium"
                className="btn-login"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography className="att-txt">
            当システムで知り得た営業情報又はサービス情報はすべて秘密事項扱いです
          </Typography>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

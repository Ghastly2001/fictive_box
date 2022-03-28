import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#99CD4E",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  button: {
    background: "#99CD4E",
    padding: 10,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => history.push("/")}
            className={classes.title}
          >
            User Info
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => history.push("/login")}
          >
            LOGIN
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

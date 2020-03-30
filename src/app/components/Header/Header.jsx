import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import * as ROUTES from "../../appRoutes";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Link,
  Button
} from "@material-ui/core";
import LOGO from "../../assets/images/LOGO.png";
import { useUserContext } from "../UserProvider/UserProvider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    background: "transparent"
    // position: "fixed"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: { height: 30 },
  linkItem: {
    paddingLeft: 10,
    paddingRight: 10
  }
}));

function Header() {
  const classes = useStyles();
  const { logout, userState } = useUserContext();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Container maxWidth="lg">
          <Toolbar>
            <RouterLink to={ROUTES.HOME}>
              <img src={LOGO} className={classes.logo} alt="logo" />
            </RouterLink>
            <Box
              display="flex"
              flexGrow="1"
              alignItems="center"
              justifyContent="flex-end"
            >
              {userState.user && (
                <Link
                  className={classes.linkItem}
                  component={RouterLink}
                  to={ROUTES.DICTIONARY}
                  color="textPrimary"
                >
                  DICTIONARY
                </Link>
              )}
              {userState.user && (
                <Link
                  className={classes.linkItem}
                  component={RouterLink}
                  to={ROUTES.HOME}
                  color="textPrimary"
                >
                  HOME
                </Link>
              )}
              {userState.user && (
                <Link
                  className={classes.linkItem}
                  component={RouterLink}
                  to={ROUTES.TEST}
                  color="textPrimary"
                >
                  TEST
                </Link>
              )}
              {userState.user && (
                <Box className={classes.linkItem}>
                  <Button variant="outlined" onClick={logout}>
                    LOGOUT
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;

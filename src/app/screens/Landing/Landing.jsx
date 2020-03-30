import React from "react";
import { withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { makeStyles } from "@material-ui/core/styles";
import LoginDialog from "../../components/LoginDialog/LoginDialog";
// import { useUserContext } from "../../components/UserProvider/UserProvider";
// import Background from "../../../assets/images/bg3.jpg";
// import * as ROUTES from "../../appRoutes";

const useStyles = makeStyles(theme => ({
  heroWrapper: {
    marginTop: 200
  },
  titleBreak: {
    fontWeight: 900
  },
  link: { textDecoration: "none" }
}));

function Home(props) {
  const classes = useStyles();

  return (
    <>
      <Box textAlign="center" m={1} className={classes.heroWrapper}>
        <Typography component="div" variant="h2" color="textSecondary">
          START BUILDING YOUR{" "}
          <span className={classes.titleBreak}>DICTIONARY</span>
        </Typography>
        <Typography component="div" variant="h4" color="textSecondary">
          LEARN FROM ANYWHERE
        </Typography>
        <Box m={1}>
          <LoginDialog />
        </Box>
      </Box>
    </>
  );
}

export default withRouter(Home);

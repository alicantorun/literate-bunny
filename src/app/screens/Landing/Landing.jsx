import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginDialog from "../../components/LoginDialog/LoginDialog";

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

export default Home;

const useStyles = makeStyles(theme => ({
  heroWrapper: {
    marginTop: 200
  },
  titleBreak: {
    fontWeight: 900
  },
  link: { textDecoration: "none" }
}));

import React from "react";
import { withRouter } from "react-router";
import { Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VocabularyList from "../../components/VocabularyList/VocabularyList";

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textSecondary">
          <Box textAlign="center" m={1}>
            YOUR <span className={classes.titleBreak}>DICTIONARY</span>
          </Box>
        </Typography>
        <VocabularyList />
      </Container>
    </div>
  );
}

export default withRouter(Home);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  titleBreak: {
    fontWeight: 900
  }
}));

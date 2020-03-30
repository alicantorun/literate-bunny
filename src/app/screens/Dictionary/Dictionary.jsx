import React from "react";
import { withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Grid, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AddVocabulary from "../../components/AddVocabulary/AddVocabulary";
import VocabularyList from "../../components/VocabularyList/VocabularyList";
import { addVocabularyPair } from "../../../store/ducks/dictionarySlice";
import * as ROUTES from "../../appRoutes";

function Home(props) {
  const classes = useStyles();
  //   const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();

  const addPair = pair => {
    dispatch(addVocabularyPair(pair));
  };

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
  link: { textDecoration: "none" },
  //   root: {
  //     height: "100vh",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center"
  //   },
  //   bgImageContainer: {
  //     width: "100%",
  //     height: "100%",
  //     zIndex: "-1",
  //     objectFit: "cover",
  //     position: "absolute"
  //   },
  titleBreak: {
    fontWeight: 900
  }
  //   button: {
  //     borderRadius: theme.spacing(3),
  //     paddingLeft: theme.spacing(7),
  //     paddingRight: theme.spacing(7),
  //     paddingTop: theme.spacing(1.5),
  //     paddingBottom: theme.spacing(1.5),
  //     background: "linear-gradient(to right, #000046, #1cb5e0);",
  //     "&:hover": {
  //       background: "linear-gradient(to right, #000176, #0fd1e0);",
  //       transition: 0.3
  //     }
  //   },
  //   link: { textDecoration: "none" }
}));

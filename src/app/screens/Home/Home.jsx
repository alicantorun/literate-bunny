import React from "react";
import { withRouter } from "react-router";
import { Box, Typography, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AddVocabulary from "../../components/AddVocabulary/AddVocabulary";
import {
  addVocabularyPair,
  selectDictionary
} from "../../../store/ducks/dictionarySlice";
import { useUserContext } from "../../components/UserProvider/UserProvider";

function Home(props) {
  const classes = useStyles();
  const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();
  const { userState } = useUserContext();

  const addPair = pair => {
    dispatch(addVocabularyPair(pair));
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textSecondary">
          <Box textAlign="center" m={1}>
            WELCOME <span className={classes.titleBreak}>{userState.user}</span>
          </Box>
        </Typography>
        <Box display="flex" justifyContent="center">
          <AddVocabulary addPair={addPair} />
        </Box>
        <Typography variant="h6" color="textSecondary">
          <Box textAlign="center" m={5}>
            USE THE FIELD ABOVE TO ADD MORE TO YOU PERSONAL DICTIONARY
          </Box>
        </Typography>
        <Typography variant="h4" color="textSecondary">
          <Box textAlign="center" m={5}>
            YOU HAVE{" "}
            <span className={classes.titleBreak}>{dictionary.length}</span>{" "}
            WORDS IN YOUR DICTIONARY
          </Box>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {userState.score === 0 ? (
            <Box textAlign="center" m={5}>
              TEST YOURSELF TO SEE YOUR SCORE HERE
            </Box>
          ) : (
            <Box textAlign="center" m={5}>
              YOUR OVERALL SCORE IS{" "}
              <span className={classes.titleBreak}>{userState.score}</span>{" "}
              POINTS
            </Box>
          )}
        </Typography>
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
  titleBreak: {
    fontWeight: 900
  }
}));

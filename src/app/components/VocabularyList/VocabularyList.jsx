import React, { useState } from "react";
import { Box, Typography, Grid, Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import VocabularyItem from "../VocabularyItem/VocabularyItem";
import { useSelector, useDispatch } from "react-redux";
import {
  removeVocabularyPair,
  selectDictionary
} from "../../../store/ducks/dictionarySlice";

function VocabularyList() {
  const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(dictionary.length / pageSize);
  const classes = useStyles();

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const removePair = index => {
    dispatch(removeVocabularyPair(index));
  };

  console.log(currentPage);

  return (
    <Container maxWidth="md">
      <Grid container justify="center" spacing={2}>
        <Box
          m={1}
          p={1}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.word}
          >
            ENGLISH
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.word}
          >
            GERMAN
          </Typography>
        </Box>
        {dictionary
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((valuePair, index) => (
            <Grid key={index} item xs={12} md={12}>
              <VocabularyItem
                key={index}
                index={index}
                valuePair={valuePair}
                removePair={removePair}
              />
            </Grid>
          ))}
        <Box m={5}>
          <Pagination
            count={pagesCount}
            page={currentPage}
            onChange={handleChange}
          />
        </Box>
      </Grid>
    </Container>
  );
}

export default VocabularyList;

const useStyles = makeStyles(theme => ({
  word: {
    width: "45%"
  }
}));

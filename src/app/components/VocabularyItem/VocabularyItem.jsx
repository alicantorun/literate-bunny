import React from "react";
import { Box, Typography, IconButton, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";

function VocabularyItem({ valuePair, index, removePair }) {
  const classes = useStyles();

  return (
    <>
      <Box
        m={1}
        p={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.word}
        >
          {valuePair.valueEN}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.word}
        >
          {valuePair.valueDE}
        </Typography>
        <IconButton onClick={() => removePair(index)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider light />
    </>
  );
}

export default VocabularyItem;

const useStyles = makeStyles(theme => ({
  word: {
    width: "45%"
  }
}));

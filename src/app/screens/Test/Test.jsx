import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { TextField, IconButton } from "@material-ui/core";
import EllipticButton from "../../components/EllipticButton/EllipticButton";
import { makeStyles } from "@material-ui/core/styles";
import { useUserContext } from "../../components/UserProvider/UserProvider";

import { selectDictionary } from "../../../store/ducks/dictionarySlice";

function Test(props) {
  const [testDictionary, setTestDictionary] = useState([]);
  const [testInput, setTestInput] = useState("");
  const [userArr, setUserArr] = useState([]);
  const [testLanguage, setTestLanguage] = useState("");
  const [testLanguagePair, setTestLanguagePair] = useState([]);
  const [testState, setTestState] = useState(false);
  const [scoreState, setScoreState] = useState(false);
  const [startState, setStartState] = useState(true);
  const [level, setLevel] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const classes = useStyles();
  const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();
  const [reload, setReload] = useState(0);
  const { updateScore } = useUserContext();

  useEffect(() => {
    randomGenerator(20);
  }, [reload]);

  const randomGenerator = n => {
    const shuffled = [...dictionary].sort(() => 0.5 - Math.random());
    setTestDictionary(shuffled.slice(0, n));
  };

  const updateField = e => {
    setTestInput(e.target.value);
  };

  const keyPress = e => {
    if (e.keyCode === 13) {
      onNext();
    }
  };
  const onNext = () => {
    let incLevel = true;
    if (
      testInput.toLowerCase() ===
      testDictionary[currentLevel][testLanguagePair[0]].toLowerCase()
    )
      setScore(score + 1);
    setUserArr([...userArr, testInput]);
    setTestInput("");
    if (currentLevel + 1 === Number(level)) {
      setScoreState(true);
      incLevel = false;
      updateScore(score);
    }
    if (incLevel) setCurrentLevel(currentLevel + 1);
  };

  const onStartTest = () => {
    setTestState(true);
    setStartState(false);
  };

  const onRestartTest = () => {
    setScoreState(false);
    setTestState(false);
    setStartState(true);
    setCurrentLevel(0);
    setLevel(0);
    setScore(0);
    setUserArr([]);
    setReload(reload + 1);
  };

  const handleLanguageChange = event => {
    setTestLanguage(event.target.value);
    setTestLanguagePair(event.target.value.split("."));
  };

  const updateLevel = e => {
    setLevel(e.target.value);
  };

  const DisplayStart = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" color="textSecondary">
          <Box textAlign="center" m={5}>
            HERE YOU CAN TEST YOURSELF
          </Box>
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          <FormControl className={classes.formControl}>
            <InputLabel>Language</InputLabel>
            <Select value={testLanguage} onChange={handleLanguageChange}>
              <MenuItem value={"valueEN.valueDE"}>English</MenuItem>
              <MenuItem value={"valueDE.valueEN"}>German</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>LEVEL</InputLabel>
            <Select value={level} onChange={updateLevel}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box marginTop={2}>
          <EllipticButton text="Start Test" onClick={onStartTest} />
        </Box>
      </Box>
    );
  };

  const DisplayTest = () => {
    return (
      <div className={classes.root}>
        <Typography variant="h2" color="textSecondary">
          <Box textAlign="center" m={1}>
            LEVEL <span className={classes.titleBreak}>{currentLevel + 1}</span>{" "}
            OUT OF {level}
          </Box>
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h2" color="textSecondary">
            <Box textAlign="center" m={1}>
              {testDictionary.length > 0 &&
                testDictionary[currentLevel][testLanguagePair[1]]}
            </Box>
          </Typography>
          <TextField
            autoFocus={true}
            name="valueEN"
            variant="outlined"
            type="text"
            className="input"
            value={testInput}
            onChange={updateField}
            style={{ width: "200px" }}
            onKeyDown={keyPress}
          />
          <Box m={2}>
            <EllipticButton text="NEXT" onClick={onNext} />
          </Box>
        </Box>
      </div>
    );
  };

  const DisplayScore = () => {
    return (
      <>
        <Typography variant="h2" color="textSecondary">
          <Box textAlign="center" m={1}>
            YOUR <span className={classes.titleBreak}>SCORE IS {score}</span>
          </Box>
        </Typography>
        <ul>
          {userArr.map((item, i) => {
            return (
              <li
                key={i}
                className={
                  testDictionary[i][testLanguagePair[0]].toLowerCase() ===
                  item.toLowerCase()
                    ? classes.greenText
                    : classes.redText
                }
              >
                YOUR ANSWER: {item} - CORRECT ANSWER:{" "}
                {testDictionary[i][testLanguagePair[1]]}
              </li>
            );
          })}
        </ul>
        <Button onClick={onRestartTest}>Restart Test</Button>
      </>
    );
  };

  if (startState) {
    return <DisplayStart />;
  } else if (!scoreState && testState) {
    return <DisplayTest />;
  } else if (scoreState) {
    return <DisplayScore />;
  }
}

export default Test;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  titleBreak: {
    fontWeight: 900
  },
  greenText: {
    color: "green"
  },
  redText: {
    color: "red"
  },
  formControl: {
    width: 200
  }
}));

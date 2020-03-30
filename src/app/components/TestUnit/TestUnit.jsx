import React, { useState } from "react";
import { TextField, Box, Typography, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function TestUnit(props) {
  const [valuePair, setValuePair] = useState({ valueEN: "", valueDE: "" });

  //   const updateField = e => {
  //     setValuePair({
  //       ...valuePair,
  //       [e.target.name]: e.target.value
  //     });
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (!valuePair.valueEN || !valuePair.valueDE) return;
  //     addPair(valuePair);
  //     setValuePair({ valueEN: "", valueDE: "" });
  //   };

  console.log(props.dictionaryItem);

  return (
    <div>
      {props.level}

      {props.dictionaryItem && props.dictionaryItem.valueEN}
    </div>
  );
}

export default TestUnit;

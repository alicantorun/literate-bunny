import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function AddVocabulary({ addPair }) {
  const [valuePair, setValuePair] = useState({ valueEN: "", valueDE: "" });

  const updateField = e => {
    setValuePair({
      ...valuePair,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!valuePair.valueEN || !valuePair.valueDE) return;
    addPair(valuePair);
    setValuePair({ valueEN: "", valueDE: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="valueEN"
        variant="outlined"
        type="text"
        className="input"
        label="English"
        value={valuePair.valueEN}
        onChange={updateField}
      />
      <TextField
        name="valueDE"
        variant="outlined"
        type="text"
        className="input"
        label="German"
        value={valuePair.valueDE}
        onChange={updateField}
      />
      <IconButton
        type="submit"
        size="medium"
        color={valuePair.valueEN && valuePair.valueDE && "secondary"}
      >
        <AddCircleIcon color="inherit" />
      </IconButton>
    </form>
  );
}

export default AddVocabulary;

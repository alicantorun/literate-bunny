import { createSlice } from "@reduxjs/toolkit";
import DICTIONARY_DATA from "../../fixtures/dictionary.json";

export const slice = createSlice({
  name: "dictionary",
  initialState: [...DICTIONARY_DATA],
  reducers: {
    addVocabularyPair: (state, action) => {
      const vocabularyPair = action.payload;
      state.unshift(vocabularyPair);
    },
    removeVocabularyPair: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
    resetDictionary: state => [...DICTIONARY_DATA]
  }
});

export const {
  addVocabularyPair,
  removeVocabularyPair,
  resetDictionary
} = slice.actions;

export const selectDictionary = state => state.dictionary;

export default slice.reducer;

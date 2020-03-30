import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dictionary",
  initialState: {
    games: []
  },
  reducers: {
    addVocabularyPair: (state, action) => {
      const vocabularyPair = action.payload;
      state.unshift(vocabularyPair);
    },

    removeVocabularyPair: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    }
  }
});

export const { addVocabularyPair, removeVocabularyPair } = slice.actions;
export const selectDictionary = state => state.dictionary;

export default slice.reducer;

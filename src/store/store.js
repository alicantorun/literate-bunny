import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./ducks/dictionarySlice";

export default configureStore({
  reducer: {
    dictionary: dictionaryReducer
  }
});

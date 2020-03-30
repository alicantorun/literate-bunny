import React, { useContext, createContext, useReducer } from "react";
import { useDispatch } from "react-redux";
import { resetDictionary } from "../../../store/ducks/dictionarySlice";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export const withAuthorization = condition => Child => {
  return function WithAuthorization(props) {
    const { userState } = useUserContext();
    return condition(userState) ? (
      <Child {...props} />
    ) : (
      <Child {...props} unAuthorized />
    );
  };
};

const initialState = {
  user: null,
  isAuthenticated: false,
  score: 0
};

export default function UserProvider(props) {
  const [userState, setUserState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  const dispatch = useDispatch();

  const login = name => {
    setUserState({ isAuthenticated: true, user: name });
  };
  const logout = () => {
    dispatch(resetDictionary());
    setUserState({ isAuthenticated: false, user: null, score: 0 });
  };
  const updateScore = score => {
    setUserState({ score: score });
  };

  const value = {
    userState,
    login,
    logout,
    updateScore
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

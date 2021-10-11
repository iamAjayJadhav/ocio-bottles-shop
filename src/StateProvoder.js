import React, { createContext, useContext, useReducer } from "react";

//prepare datalayer
export const StateContext = createContext();

//wrap our app with the datalayer
export const StateProvder = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information
export const useStateValue = () => useContext(StateContext);

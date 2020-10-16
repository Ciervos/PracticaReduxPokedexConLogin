import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { usuario } from "./reducers/user";
import { pokemon } from "./reducers/pokemon";

const InitialState = {};

 export const searchPokemon = (poke) => (dispatch) => {
 return dispatch({
    type: "searchPokemon",
    poke,
 });
 };

 export const checkUser = (maestro,contra) => (dispatch) => {
  return dispatch({
     type: "checkUser",
     maestro,
     contra,
  });
  };


export function initializeStore() {
  return createStore(
    combineReducers({usuario,pokemon}),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
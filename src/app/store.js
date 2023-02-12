import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let preloadState;
if (localStorage.getItem("posts")) {
  preloadState = localStorage.getItem("posts");
}

const store = createStore(rootReducer, preloadState, composeWithDevTools());

export default store;

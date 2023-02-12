import { combineReducers } from "redux";
import messagesReducer from "../reducers/messagesSlice";
import postReducer from "../reducers/postsSlice";
import chatListReducer from "../reducers/chatListSlice";
import usersReducer from "../reducers/usersSlice";

export const rootReducer = combineReducers({
  posts: postReducer,
  dialogs: messagesReducer,
  chatList: chatListReducer,
  users: usersReducer,
});

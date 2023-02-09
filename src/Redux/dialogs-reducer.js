const PUSH_MESSAGE = "PUSH-MESSAGE";
const dialogsReducer = (state, action) => {
  if (action.type === PUSH_MESSAGE) {
    if (action.message == false) {
      console.log("Please enter corrent Data");
    } else {
      state.messagesData.push(action);
    }
  }
  return state;
};

export const MessageActionCreator = (message) => {
  return {
    type: PUSH_MESSAGE,
    message: message,
    id: 6,
  };
};

export default dialogsReducer;

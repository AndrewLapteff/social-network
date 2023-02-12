let initialState = [
  { message: "Hay, greate acc", id: 1 },
  { message: "Can you give me ur password?", id: 1 },
  { message: "I'm Artem", id: 3 },
];
// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dialogs/createMessage": {
      return [
        ...state,
        {
          message: action.payload,
          id: 8,
        },
      ];
    }
    default:
      return state;
  }
};

export default messagesReducer;

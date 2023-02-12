let initialState = [
  { name: "Bogdan", id: 1 },
  { name: "Kostya", id: 2 },
  { name: "Artems", id: 3 },
  { name: "Denis", id: 4 },
];
// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }

const chatListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "someTask": {
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

export default chatListReducer;

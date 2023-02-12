let initialState = [
  { name: "Bogdan", id: 1, post: "Nice account!" },
  { name: "Bogdan", id: 2, post: "Go to GYM" },
  { name: "Kostya", id: 3, post: "ksdjfkjhSDKJFHKSJHkjdsf" },
  { name: "Andrew", id: 4, post: "I'll hack u" },
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "post/createPost": {
      return [
        ...state,
        {
          name: "username",
          id: 6,
          post: action.payload,
        },
      ];
    }
    default:
      return state;
  }
};

export default postReducer;

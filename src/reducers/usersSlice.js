const initialState = [
  { id: 1, followed: false, fullname: "Amigo", description: "I'm admin" },
  { id: 2, followed: true, fullname: "Andrew", description: "I'm creator" },
  { id: 3, followed: false, fullname: "Bogdan" },
];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleFollow":
      return state.map((id) => {
        if (state.id != action.id) {
          return store;
        }
        return {
          ...state,
          followed: !state.followed,
        };
      });
    case "setUsers":
      //? зклеїть попередніх з тими які прийшли при кліку на кнопку
      return { ...state, state: [...state, ...action.users] };
    default:
      return state;
  }
};

export default usersReducer;

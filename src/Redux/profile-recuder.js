//! якщо action не примінився то все одно return state
const ADDPOST = "ADD-POST";
const profileReducer = (state, action) => {
  if (action.type === ADDPOST) {
    if (action.post == false) {
      console.log("Please enter corrent Data");
    } else {
      let newPost = {
        name: "user",
        id: 5,
        post: action.post,
      };
      state.postsData.push(newPost);
    }
  }

  return state;
};

//? ActionCreater - умовна утілітка для створення об'єктів для діспатчера
//! Обов'язково ActionCreaters мають бути в BLL а не
export const addPostActionCreater = (message) => {
  return {
    type: ADDPOST,
    post: message,
  };
};

export default profileReducer;

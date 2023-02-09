//DTO - Data Transfer Object
import { rerender } from "./../main";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-recuder";
import sidebarReducer from "./sidebar-reducer";

//*CONSTS
const PUSH_MESSAGE = "PUSH-MESSAGE";
const ADDPOST = "ADD-POST";

let store = {
  state: {
    //! розбивка данних по сторінкам треба для того щоб компоненти не отримували зайвих данних
    profilePage: {
      //! map повинен перебирати передпослідню вітку
      postsData: [
        { name: "Bogdan", id: 1, post: "Nice account!" },
        { name: "Bogdan", id: 2, post: "Go to GYM" },
        { name: "Kostya", id: 3, post: "ksdjfkjhSDKJFHKSJHkjdsf" },
        { name: "Andrew", id: 4, post: "I'll hack u" },
      ],
    },
    dialogsPage: {
      //! map повинен перебирати передпослідню вітку
      messagesData: [
        { message: "Hay, greate acc", id: 1 },
        { message: "Can you give me ur password?", id: 1 },
        { message: "I'm Artem", id: 3 },
      ],
      //! map повинен перебирати передпослідню вітку
      usersListInChat: [
        { name: "Bogdan", id: 1 },
        { name: "Kostya", id: 2 },
        { name: "Artems", id: 3 },
        { name: "Denis", id: 4 },
      ],
    },
    sideBar: {},
  },

  getState() {
    return this.state;
  },

  //action = об'єкт який опитує яку дію сотворити, в нього моє бути свойство type
  //action.someinfo - можна передавать інфу із UI
  dispatch(action) {
    //?робота reducers
    store.state.profilePage = profileReducer(store.state.profilePage, action);
    store.state.dialogsPage = dialogsReducer(store.state.dialogsPage, action);
    store.state.sideBar = sidebarReducer(store.state.sideBar, action);

    rerender();
  },
};

export default store;

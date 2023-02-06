//DTO - Data Transfer Object
let state = {
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
};

export default state;

import { DialogItem } from "./DialogsItem/DialogItem";
import DialogsCSS from "./Dialogs.module.css";
import { Text } from "./Text/Text";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Dialogs = React.memo(function Dialogs(props) {
  //* HOOKS
  const msgInput = React.createRef();
  const dialogs = useSelector((state) => state.dialogs); //!MINIMIZE STATE
  const chatList = useSelector((state) => state.chatList); //!MINIMIZE STATE
  const dispatch = useDispatch();
  // console.log(state);
  //* GET
  const messages = dialogs.map((msg, i) => {
    //? перевірка на цілістність данних
    if (msg.message && msg.id) {
      return <Text key={i} text={msg.message} />;
    } else {
      return console.log("Nope");
    }
  });

  const users = chatList.map((user, i) => {
    return <DialogItem key={i} name={user.name} id={user.id} />;
  });

  //* POST
  function enterPress(e) {
    if (e.key == "Enter") {
      addMessage();
    }
  }

  const addMessage = () => {
    dispatch({
      type: "dialogs/createMessage",
      payload: msgInput.current.value,
    });
    msgInput.current.value = "";
  };

  return (
    <div className={DialogsCSS.dialogs_wrapper}>
      <p className={DialogsCSS.header}>Dialogs</p>
      <div></div>
      <div className={DialogsCSS.chat_items}>{users}</div>
      <div className={DialogsCSS.text_area}>
        {messages}
        <div>
          <input
            onKeyDown={enterPress}
            ref={msgInput}
            className={DialogsCSS.text_area_dialogs}
            maxLength={1000}
          />
          <button className={DialogsCSS.msg_post_button} onClick={addMessage}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
});

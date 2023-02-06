import { DialogItem } from "./DialogsItem/DialogItem";
import DialogsCSS from "./Dialogs.module.css";
import { Text } from "./Text/Text";

export const Dialogs = (props) => {
  //? те шо і на 24 строкі
  // let messages = props.msg.map((msg) => {
  //   return <Text text={msg.message} />;
  // });
  //? те шо і на 20 строкі
  // let users = props.userList.map((user) => {
  //   return <DialogItem name={user.name} id={user.id} />;
  // });

  return (
    <div className={DialogsCSS.dialogs_wrapper}>
      <p className={DialogsCSS.header}>Dialogs</p>
      <div>{props.state.usersListInChat.name}</div>
      <div className={DialogsCSS.chat_items}>
        {props.state.usersListInChat.map((user, i) => (
          <DialogItem key={i} name={user.name} id={user.id} />
        ))}
      </div>
      <div className={DialogsCSS.text_area}>
        {props.state.messagesData.map((msg, i) => (
          <Text key={i} text={msg.message} />
        ))}
      </div>
    </div>
  );
};

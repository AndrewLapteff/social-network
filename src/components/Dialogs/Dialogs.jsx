import { NavLink } from "react-router-dom";
import DialogsCSS from "./Dialogs.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id; //! path constructor
  return (
    <div className={DialogsCSS.chat_item}>
      <NavLink to={path} className={DialogsCSS.link}>
        {props.name}
      </NavLink>
    </div>
  );
}

function Text(props) {
  return <div className={DialogsCSS.msg}>{props.text}</div>;
}

//! цього тут не повинно бути, просто для наглядності
let usersDATA = [
  { name: "Bogdan", id: 1 },
  { name: "Kostya", id: 2 },
  { name: "Artems", id: 3 },
  { name: "Denis", id: 4 },
];

//! приклад обробки данних які "приходять" 
let users = usersDATA.map((user) => {
  return <DialogItem name={user.name} id={user.id} />;
});

//! цього тут не повинно бути, просто для наглядності
let messagesDATA = [
  { message: "Hay, greate acc", id: 1 },
  { message: "Can you give me ur password?", id: 1 },
  { message: "I`m Artems", id: 3 },
];

export const Dialogs = (props) => {
  return (
    <div className={DialogsCSS.dialogs_wrapper}>
      <p className={DialogsCSS.header}>Dialogs</p>
      <div className={DialogsCSS.chat_items}>{users}</div>
      <div className={DialogsCSS.text_area}>
        <Text text={messagesDATA[0].message} /> //! map needed
        <Text text={messagesDATA[1].message} />
      </div>
    </div>
  );
};

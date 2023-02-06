import { NavLink } from "react-router-dom";
import DialogsCSS from "./../Dialogs.module.css";

export function DialogItem(props) {
  let path = "/dialogs/" + props.id; //! path constructor
  return (
    <div className={DialogsCSS.chat_item}>
      <NavLink to={path} className={DialogsCSS.link}>
        {props.name}
      </NavLink>
    </div>
  );
}

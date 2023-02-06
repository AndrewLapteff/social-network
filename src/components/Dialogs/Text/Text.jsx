import DialogsCSS from "./../Dialogs.module.css";

export function Text(props) {
  return <div className={DialogsCSS.msg}>{props.text}</div>;
}

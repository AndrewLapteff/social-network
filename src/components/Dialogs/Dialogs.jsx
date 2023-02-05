import DialogsCSS from "./Dialogs.module.css";
export const Dialogs = (props) => {
  return (
    <div className={DialogsCSS.dialogs_wrapper}>
      <p className={DialogsCSS.header}>Dialogs</p>
      <div className={DialogsCSS.chat_item}>
        <div>Bogdan</div>
        <div>Bogdan</div>
        <div>Bogdan</div>
        <div>Bogdan</div>
      </div>
      <div className={DialogsCSS.text_area}>Text Area</div>
    </div>
  );
};

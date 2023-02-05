import PostCSS from "./Post.module.css";
export function Post(props) {
  return (
    <div className={PostCSS.post}>
      <img
        className={PostCSS.users_avatar}
        src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png"
        alt="users_avatar"
      ></img>
      <div className={PostCSS.textarea}>
        <b>
          <p className={PostCSS.nickname}>{props.name}</p>
        </b>
        <p className={PostCSS.msg}>{props.msg}</p>
      </div>
    </div>
  );
}

import React from "react";
import ProfileCSS from "../Profile.module.css"; // * шоб пости піддавались правилам гріда
import PostsCSS from "./Posts.module.css";
import { Post } from "./Post/Post";
import { addPostActionCreater } from "../../../Redux/profile-recuder";

export function Posts(props) {
  const inpText = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreater(inpText.current.value));
  };

  return (
    <div className={`${ProfileCSS.post} ${PostsCSS.post}`}>
      <div>Send post</div>
      <div>
        <textarea
          ref={inpText}
          rows={3}
          maxLength={1000}
          className={PostsCSS.textarea}
        />
      </div>
      <div className={PostsCSS.button_wrapper}>
        <button className={PostsCSS.post_button} onClick={addPost}>
          Post
        </button>
      </div>
      {props.state.map((el, i) => (
        <Post key={i} name={el.name} msg={el.post} />
      ))}
    </div>
  );
}

import React from "react";
import ProfileCSS from "../Profile.module.css"; // * шоб пости піддавались правилам гріда
import PostsCSS from "./Posts.module.css";
import { Post } from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";

export const Posts = React.memo(function Posts(props) {
  //* HOOKS
  const postInput = React.createRef();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts); //! ONLY POSTS

  //* GET
  const postsArr = posts.map((post, i) => (
    <Post key={i} name={post.name} msg={post.post} />
  ));

  //* POST
  const addPost = () => {
    dispatch({ type: "post/createPost", payload: postInput.current.value });
    postInput.current.value = "";
  };
  return (
    <div className={`${ProfileCSS.post} ${PostsCSS.post}`}>
      <div>Send post</div>
      <div>
        <textarea
          ref={postInput}
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
      {postsArr}
    </div>
  );
});

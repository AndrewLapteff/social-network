import ProfileCSS from "../Profile.module.css"; // * шоб пости піддавались правилам гріда
import PostsCSS from "./Posts.module.css";
import { Post } from "./Post/Post";
export function Posts() {
  return (
    <div className={`${ProfileCSS.post} ${PostsCSS.post}`}>
      <div>Send post</div>
      <Post name="Andrew" msg="Nice account!" />
      <Post name="Bogdan" msg="Go to GYM" />
      <Post name="Kostya" msg="ksdjfkjhSDKJFHKSJHkjdsf" />
      <Post name="Artem" msg="I'll hack u" />
    </div>
  );
}

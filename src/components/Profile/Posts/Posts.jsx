import ProfileCSS from "../Profile.module.css"; // * шоб пости піддавались правилам гріда
import PostsCSS from "./Posts.module.css";
import { Post } from "./Post/Post";

const postDATA = [
  { name: "Bogdan", id: 1, post: "Nice account!" },
  { name: "Bogdan", id: 2, post: "Go to GYM" },
  { name: "Kostya", id: 3, post: "ksdjfkjhSDKJFHKSJHkjdsf" },
  { name: "Andrew", id: 4, post: "I'll hack u" },
];

const posts = postDATA.map((i) => {
  return <Post name={i.name} msg={i.post} />;
});

export function Posts() {
  return (
    <div className={`${ProfileCSS.post} ${PostsCSS.post}`}>
      <div>Send post</div>
      {posts}
    </div>
  );
}

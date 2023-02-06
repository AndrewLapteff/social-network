import ProfileCSS from "../Profile.module.css"; // * шоб пости піддавались правилам гріда
import PostsCSS from "./Posts.module.css";
import { Post } from "./Post/Post";
export function Posts(props) {
  // const postz = props.posts.map((i) => {
  //   return <Post name={i.name} msg={i.post} />;
  // });
  return (
    <div className={`${ProfileCSS.post} ${PostsCSS.post}`}>
      <div>Send post</div>
      {props.state.map((el, i) => (
        <Post key={i} name={el.name} msg={el.post} />
      ))}
    </div>
  );
}

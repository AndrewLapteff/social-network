import ProfileCSS from "./Profile.module.css";
import ava from "../../img/avatar.png";
import { Posts } from "./Posts/Posts";

export function Profile(props) {
  return (
    <div className={ProfileCSS.content}>
      <img
        className={ProfileCSS.hat}
        src="https://www.marinecamerasystems.com/images-rugged-marine/slider/slides/1920x400/sunrise-1920x400.png"
        alt="hat"
      ></img>
      <div className={ProfileCSS.avatar}>
        <img src={ava} alt="avatar"></img>
      </div>
      <div className={ProfileCSS.bio}>
        <div className={ProfileCSS.name}>
          <p>Andrew</p>
        </div>
        <div className={ProfileCSS.description}>Description</div>
      </div>
      <Posts state={props.state.postsData} dispatch={props.dispatch}></Posts>
    </div>
  );
}

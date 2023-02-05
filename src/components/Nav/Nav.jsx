import { Link, NavLink } from "react-router-dom";
import NavCSS from "./Nav.module.css";

const activeStyle = {
  color: "white",
  fontSize: "110%",
};

export function Nav() {
  return (
    <nav className={NavCSS.nav}>
      <div>
        <NavLink
          className={`${NavCSS.link} ${NavCSS.top_link}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/profile"
          // activeClassName={NavCSS.active}
        >
          Профіль
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`${NavCSS.link}`}
          to="/dialogs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Повідомлення
        </NavLink>
      </div>
      <div className={`${NavCSS.link}`}>Новини</div>
      <div className={`${NavCSS.link}`}>Налаштування</div>
    </nav>
  );
}

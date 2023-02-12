import React from "react";
import UsersCSS from "./Users.module.css";

export function Users() {
  return (
    <div className={UsersCSS.users_wrapper}>
      <p className={UsersCSS.header}>Users</p>
    </div>
  );
}

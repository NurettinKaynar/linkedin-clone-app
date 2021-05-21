import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1533689310123-324a15661d28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profil görüntülemeleri</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Gönderini görenler</p>
          <p className="sidebar__statNumber">523</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>En son</p>
        {recentItem("ReactJs")}
        {recentItem("Redux")}
        {recentItem("UI UX Design")}
        {recentItem("Nodejs")}
        {recentItem("MongoDB")}
        {recentItem("Firebase")}
        {recentItem("Yazılım Mühendisliği")}
      </div>
    </div>
  );
}

export default Sidebar;

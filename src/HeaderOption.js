import React from "react";
import "./HeaderOption.css";
import { Avatar, Tooltip } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Tooltip title="Çıkış Yap" arrow aria-label="Çıkış Yap">
          <Avatar className="headerOption__icon" src={user?.photoUrl}>
            {user?.email[0]}
          </Avatar>
        </Tooltip>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

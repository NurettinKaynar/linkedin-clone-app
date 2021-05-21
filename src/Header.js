import React from "react";
import "./Header.css";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import HeaderOption from "./HeaderOption";
import Logo from "./logo/linkedin.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOffApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Çıkış Yap" />

        <div className="header__search">
          <Search />
          <input placeholder="Ara" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Ev" />
        <HeaderOption Icon={SupervisorAccount} title="Ağım" />
        <HeaderOption Icon={BusinessCenter} title="İş" />
        <HeaderOption Icon={Chat} title="Mesajlar" />
        <HeaderOption Icon={Notifications} title="Bildirimler" />
        <HeaderOption avatar={true} title="Ben" onClick={logoutOffApp} />
      </div>
    </div>
  );
}

export default Header;

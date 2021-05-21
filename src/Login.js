import { InfoOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./login.css";
import LinkedinLogo from "./logo/logo-linkedin.png";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const [goster, setGoster] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Tüm Alanları Doldurunuz");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uuid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const kayitgoster = () => {
    setGoster(true);
    // register();
  };
  const kayitgizle = () => {
    setGoster(false);
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uuid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img className="loginImg" src={LinkedinLogo} />
      <form>
        {goster ? (
          <>
            <form className="loginForm">
              <input
                className="loginFormInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız ve Soyadınız*"
                type="text"
              />
              <input
                className="loginFormInput"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profil Fotoğrafınız URL"
                type="text"
              />
              <input
                className="loginFormInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                type="email"
              />
              <input
                className="loginFormInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre*"
                type="password"
              />
              <button
                className="loginFormButton"
                type="submit"
                onClick={register}
              >
                Kayıt Ol ve Giriş Yap
              </button>
            </form>
            <p className="loginP">
              Hesabın mı var?{" "}
              <span className="login__register" onClick={kayitgizle}>
                Giriş Yap
              </span>
            </p>
          </>
        ) : (
          <>
            <form className="loginForm">
              <input
                className="loginFormInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                type="email"
              />
              <input
                className="loginFormInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre*"
                type="password"
              />
              <button
                className="loginFormButton"
                type="submit"
                onClick={loginToApp}
              >
                Giriş Yap
              </button>
            </form>
            <p className="loginP">
              Kayıt Olmadın mı?{" "}
              <span className="login__register" onClick={kayitgoster}>
                Kayıt Ol
              </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default Login;

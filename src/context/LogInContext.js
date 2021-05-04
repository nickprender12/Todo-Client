import React, { createContext, useState, useEffect } from "react";
import loginService from "../services/login";
import todoService from "../services/todos";

export const LogInContext = createContext();

export const LogInProvider = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem("loggedInTodoAppUser");
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON);
  //     setUser(user);
  //     todoService.setToken(user.token);
  //   }
  // }, []);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedInTodoAppUser", JSON.stringify(user));
      todoService.setToken(user.token);
      setCurrentUser(user);
      setUsername("");
      setPassword("");
      // setLoggedIn(true);
      // console.log('you are logged in');
      // console.log(user);
      // console.log("current user: ", currentUser.username);
      // console.log("did it work?");
    } catch (exception) {
      setPassword("");
      // console.log("Wrong username or password");
    }
  };
  return (
    <LogInContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        currentUser,
        setCurrentUser,
        handleLogIn,
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
};

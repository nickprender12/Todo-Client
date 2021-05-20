import React, { createContext, useState, useContext, useEffect } from 'react';
import userService from '../services/user';
import loginService from '../services/login';
import todoService from '../services/todos';
import { AppContext } from './AppContext';

// import addCurrentUser from '../features/currentUser/currentUserSlice';
// import { useDispatch, useSelector } from 'react-redux';

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const { handleClose, setMessage, handleLogInClose } = useContext(AppContext);

  // const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInTodoAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setCurrentUser(user);
      // dispatch(addCurrentUser(user));
      // console.log("userId:", user);
      todoService.setToken(user.token);
    }
  }, []);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const userObject = {
        name: name,
        username: username,
        password: password,
      };
      await userService.create(userObject);
      setName('');
      setUsername('');
      setPassword('');
      handleClose();
      setMessage('You did it!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);

      // console.log("Account created...");
    } catch (exception) {
      // console.log("invalid username or password");
    }
  };

  // const handleLogIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await loginService.login({
  //       username,
  //       password,
  //     });
  //     window.localStorage.setItem('loggedInTodoAppUser', JSON.stringify(user));
  //     todoService.setToken(user.token);
  //     setCurrentUser(user);
  //     // dispatch(addCurrentUser(user));
  //     setUsername('');
  //     setPassword('');
  //     setLoggedIn(true);
  //     // console.log("you are logged in");
  //   } catch (exception) {
  //     setPassword('');
  //     // console.log("Wrong username or password");
  //   }
  // };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      handleLogInClose();
      setCurrentUser(null);
      window.localStorage.clear();
    } catch (exception) {}
  };

  return (
    <SignUpContext.Provider
      value={{
        name,
        setName,
        username,
        setUsername,
        password,
        setPassword,
        handleCreateAccount,
        loggedIn,
        setLoggedIn,
        currentUser,
        setCurrentUser,
        // handleLogIn,
        handleLogOut,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

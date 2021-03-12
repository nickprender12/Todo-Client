import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const handleOpen = () => {
    setSignUpOpen(true);
  };

  const handleClose = () => {
    setSignUpOpen(false);
  };

  const handleLogInOpen = () => {
    setLogInOpen(true);
  };

  const handleLogInClose = () => {
    setLogInOpen(false);
  };

  const handleWelcomeOpen = () => {
    setWelcomeOpen(true);
  };

  const handleWelcomeClose = () => {
    setWelcomeOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        setSignUpOpen,
        handleOpen,
        signUpOpen,
        handleClose,
        handleLogInOpen,
        handleLogInClose,
        logInOpen,
        setLogInOpen,
        handleWelcomeOpen,
        handleWelcomeClose,
        welcomeOpen,
        message,
        setMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
